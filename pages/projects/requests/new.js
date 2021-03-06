import React ,{Component} from 'react';
import {Form,Button,Message,Input} from 'semantic-ui-react';
import project  from '../../../ethereum/projects';
import web3 from '../../../ethereum/web3';
import {Link,Router} from '../../../routes';
import  Layout from '../../../components/Layout';

class RequestNew extends Component{
    state={
        description:'',
        value:'',
        recipient:'',
        errorMessage:'',
        loading:false
    }
    static async getInitialProps(props){
        const { address}=props.query;
        return {address};

    } 
    onSubmit=async event=> {

        event.preventDefault();
        this.setState({loading:true});
        this.setState({errorMessage:''});
        
       
        const Project=project(this.props.address);
       const{description,value,recipient}=this.state;
       try{
          const accounts=await web3.eth.getAccounts();
        console.log(accounts);
    
         await Project.methods.createRequest(
            description,
            web3.utils.toWei(value,'ether'),
            recipient
         ).send({from:accounts[0],
            type:'0x2'
        
        });

       }
       catch(error){
        console.log(error);
        this.setState({errorMessage:error.message});
       }
       this.setState({loading:false});
    }
   
    render(){
      
        return(
           <Layout>
               <Link route={`/projects/${this.props.address}/requests`}>
               <a>
                   Back
               </a>
               </Link>
               <h3>Create a Request </h3>
            <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                <Form.Field>
                    <label>Description</label>
                    <Input
                    value={this.state.description}
                    onChange={event=>{this.setState({description:event.target.value})}}
                    />
                </Form.Field>
          
            
                <Form.Field>
                    <label>Value in Ether</label>
                    <Input
                      value={this.state.value}
                      onChange={event=>{this.setState({value:event.target.value})}}
                    />
                </Form.Field>
          
                <Form.Field>
                    <label>Recipient Address</label>
                    <Input
                      value={this.state.recipient}
                      onChange={event=>{this.setState({recipient:event.target.value})}}
                    />
                </Form.Field>
                <Message error header="Oops !"
            
            content={this.state.errorMessage}/>
            <Button loading={!!this.state.loading} primary>Create Request!</Button>
            </Form>

           </Layout>
        );
    }

}
export default RequestNew;