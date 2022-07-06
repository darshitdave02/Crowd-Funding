const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());

const compiledFactory = require("../ethereum/build/projectFactory.json");
const compiledproject = require("../ethereum/build/project.json");

let accounts;
let project;
let projectAddress;
let factory;

beforeEach(async () => {
  // Get a list of all accounts

  accounts = await web3.eth.getAccounts();
  // Use one of those accounts to deploy
  // the contract

  factory = await new web3.eth.Contract(compiledFactory.abi)
    .deploy({
      data: compiledFactory.evm.bytecode.object,
    })
    .send({ from: accounts[0], gas: "3000000" });

  await factory.methods
    .createproject("100")
    .send({ from: accounts[0], gas: "3000000" });
  const addresses = await factory.methods.getDeployedprojects().call();

  projectAddress = addresses[0];
  project = await new web3.eth.Contract(compiledproject.abi, projectAddress);
});

describe("projects", () => {
  it("deploys a factory and a project", () => {
    assert.ok(factory.options.address);
    assert.ok(project.options.address);
  });

  it("marks caller as the project manager", async () => {
    const manager = await project.methods.manager().call();
    assert.equal(accounts[0], manager);
  });
  it("allows people to contribute and marks them as approvers", async () => {
    const manager = await project.methods.contribute().send({
      value: "200",
      from: accounts[1],
    });

    const isContributor = await project.methods.approvers(accounts[1]).call();
    assert(isContributor);
  });
  it("requires minimum contribution", async () => {
    try {
      const manager = await project.methods.contribute().send({
        value: "5",
        from: accounts[1],
      });
      assert(false);
    } catch (error) {
      assert(error);
    }
  });

  it("allows managers to make a payment request", async () => {
    const manager = await project.methods
      .createRequest("Buy batteries", "100", accounts[1])
      .send({
        from: accounts[0],
        gas: "3000000",
      });
    const request = await project.methods.requests(0).call();

    assert.equal("Buy batteries", request.description);
  });

  it("processes requests", async () => {
    const manager = await project.methods
      .contribute()
      .send({
        value:web3.utils.toWei("10", "ether"),
        from: accounts[0],
        gas: "3000000",
      });
  await project.methods
  .createRequest("A", web3.utils.toWei("5", "ether"), accounts[1])
  .send({
    from: accounts[0],
    gas: "3000000"
  });
  await project.methods.approveRequest(0).send({
    from: accounts[0],
    gas: "3000000"
  });
  await project.methods.finalizeRequest(0).send({
    from: accounts[0],
    gas: "3000000"
  });

  let balance= await web3.eth.getBalance(accounts[1]);
  balance=web3.utils.fromWei(balance, "ether");
  balance=parseFloat(balance);
  console.log(balance);
  assert(balance>103)
    
  });
});
