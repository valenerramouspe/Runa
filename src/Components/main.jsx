import React from 'react'
import ReactDOM from 'react-dom';
import Sidebar from './sidebar.jsx'

export default class Main extends React.Component{
  render(){
    return (
        <div>
          {this.props.children}
        </div>
    )
  }
};
