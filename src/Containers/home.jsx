import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from '../Components/sidebar.jsx';
import ProductGrid from '../Components/productgrid.jsx'

export default class Home extends React.Component{
	constructor(props){
      super(props);
      this.state = {
        "isFetching":true,
        "products":null
      }
      this.requestProducts=this.requestProducts.bind(this)
    }
	requestProducts(){
    const data = require('../data/data.json')
    console.log(data)
        this.setState({
        "isFetching": false,
        "products": data
        })
  }
  render(){
    return(
   		<div className="container">
   		<img className="background" src="../assets/startup.jpeg" />
    		<Sidebar />
    		<ProductGrid requestProducts={this.requestProducts} />
    	</div>
 	)
  }
}
