import web3 from "./web3";
import projectFactory from "./build/projectFactory.json";

const instance = new web3.eth.Contract(
  projectFactory.abi,
  // "0x001Bf9B2A3C35139b2e66Cc88Ab34AE4f4Ee9A28"
  "0xE663c733bDF3d4436B31A029da62C3E9aeEe1eD8"
  // '0x55E9880E9974393F8745Afe2D0DD02910219C675'
);

export default instance;
