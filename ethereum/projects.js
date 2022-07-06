import web3 from './web3'
import project from './build/project.json'

export default(address) => {
  
    return new web3.eth.Contract(
        project.abi,
        address
    );
 
};