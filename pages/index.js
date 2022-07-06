import React, {Component} from 'react';
import {Card,Button} from 'semantic-ui-react';   
import 'semantic-ui-css/semantic.min.css';
import factory from '../ethereum/factory'
import Layout from '../components/Layout';
import {Link} from '../routes'


class projectIndex extends Component{
 
   
    static async getInitialProps(){
        const projects=await factory.methods.getDeployedprojects().call();
        console.log(projects);
        return {projects};
    }
    
    renderprojects(){
        const items=this.props.projects.map(address=>
        {
           return{
               header:address,
               description:
               (
                <Link route={`/projects/${address}`}>
                <a > View project</a> 
               </Link> 
               ),
               fluid:true
           };  
        });

        return <Card.Group items={items}/>
    }

    render(){
        return(
            <Layout>
            <div>
                <h3>Open Projects</h3>
              <Link route="/projects/new">
                  <a>
                <Button floated='right'
                  content="Create project"
                    icon="add circle"
                    primary={true}
                />
                </a>
                </Link>
                  {this.renderprojects()}
            </div>
            </Layout>
        )
    }

}
export default projectIndex;