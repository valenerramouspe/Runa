import React from 'react';
import {Link} from 'react-router'
import ReactDOM from 'react-dom';
import Menu from './menu.jsx'

export default class Main extends React.Component{
	constructor(props){
		super(props);
		this.state={
			hidden: false
		}
	}
	hideNavbar(){
		this.setState({ hidden: true })
	}
  render(){
    return (
        <div>
        	<Link to='/home'><img id='logoHome' src="../assets/Logo-home.png" /></Link>
          {this.props.children}
        </div>
    )
  }
};
