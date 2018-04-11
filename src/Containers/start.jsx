import React from 'react'
import ReactDOM from 'react-dom';
import Startup from '../Components/startup.jsx'

export default class Start extends React.Component{
	componentDidMount(){
		setTimeout(function(){ window.location = window.location.href+"home"; }, 6000);
	}
  	render(){
    	return (
    		<div className='wires fadeOut'>
    			<Startup />
    		</div>
    )
  }
};