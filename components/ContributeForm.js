import React, {Component} from 'react';
import {Form,Button,Input,Message} from 'semantic-ui-react';   
import project from '../ethereum/projects'
import web3 from '../ethereum/web3'
import {Router} from '../routes'

class ContributeForm extends Component{
   state={
        value:'',
        errorMessage:'',
        loading:false
   };


   onSubmit = async (event) => {
    event.preventDefault();
    this.setState({loading:true});
    this.setState({errorMessage:''});
     const Project=project(this.props.address);
     console.log(Project);
     try{
        const account=await web3.eth.getAccounts();
        
        console.log(account[0]);
        
        await Project.methods.contribute().send({
            from:account[0],
            value:web3.utils.toWei(this.state.value,'ether'),
            
        });
     }
     catch(e){
        this.setState({errorMessage:e.message});
     }
  this.setState({loading:false});
  Router.replaceRoute(`/projects/${this.props.address}`);  
  
 };


    render(){

        return(
          
        
        <Form  onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
            <Form.Field>
                <label>Amount to Contribute</label>
                <Input label="ether" labelPosition="right"
                value={this.state.value} 
                onChange={ event =>{this.setState({value: event.target.value})}}
                />
            </Form.Field>
         <Message  error header="Oops !"
            
            content={this.state.errorMessage}/>
            <Button loading={!!this.state.loading} primary>Contribute!</Button>
           
        </Form>
      
        );
    }
     
}

export default ContributeForm;
