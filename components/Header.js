import React, {Component} from 'react';
import {Card,Button,Menu} from 'semantic-ui-react';   
import 'semantic-ui-css/semantic.min.css';
import {Link} from '../routes'


export default  (props) => {
  return(
    <Menu style={{marginTop:'30px'}}>
    <Link route='/'>
     <a className="item"> Minor-Project</a> 
    </Link>

    <Menu.Menu position='right'>
    <Link route='/'>
     <a className="item"> Projects</a> 
    </Link> 
    <Link route='/projects/new'>
     <a className="item">+</a> 
    </Link>
    </Menu.Menu>
  </Menu>

  );


};