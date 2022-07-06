import React ,{Component} from 'react';
import {Button,Table} from 'semantic-ui-react';
import {Link} from '../../../routes';
import  Layout from '../../../components/Layout';
import project from '../../../ethereum/projects';
import RequestRow from '../../../components/RequestRow';
class RequestIndex extends Component{
 
    static async getInitialProps(props){
        const address=props.query.address;
        const Project=project(address);
        const requestCount=await Project.methods.getRequestsCount().call();
        const approversCount=await Project.methods.approversCount().call();
        const requests = await Promise.all(
            Array(parseInt(requestCount))
              .fill()
              .map((element, index) => {
                return Project.methods.requests(index).call();
              })
          );
      
        return {address,requests,requestCount,approversCount};

    } 
    renderRows(){
        const {requests}=this.props;
        return requests.map((request,index)=>{
            return <RequestRow 
            key={index} 
            id={index}
            request={request}
            address={this.props.address}
            approversCount={this.props.approversCount}/>
        });
        
        
    }
    render(){
        const {Header,Row,HeaderCell,Body}=Table;
      
        return(
            <Layout>
            <h3>Requests</h3>
            <Link route={`/projects/${this.props.address}/requests/new`}>
            <a>
                <Button primary floated="right" style={{marginBottom:10}}>
                    Add Request
                </Button>
            </a>
            </Link>
            <Table>
               <Header>
                   <Row>
                       <HeaderCell>ID</HeaderCell>
                       <HeaderCell>Description</HeaderCell>
                       <HeaderCell>Amount</HeaderCell>
                       <HeaderCell>Recipient</HeaderCell>
                       <HeaderCell>Approval Count</HeaderCell>
                       <HeaderCell>Approve</HeaderCell>
                       <HeaderCell>Finalize</HeaderCell>
                       
                   </Row>
               </Header>
               <Body>
                   {this.renderRows()}
               </Body>
            </Table>
            <div>Found {this.props.requestCount} request</div>
            </Layout>
        );
    }

}
export default RequestIndex;