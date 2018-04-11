import React from 'react'
import ReactDOM from 'react-dom'

export default class ProductGrid extends React.Component{
componentWillMount(){
	const data = require('../data/data.json')
    console.log(data)
        this.setState({
        "isFetching": false,
        "products": data.items
        })
}
  render(){
    return (
    	<div className="content">
    	<div className="grid">
    	{this.state.products.map((prod) =>
            	<div className = "product" key={prod.id} >
              		<p>{prod.name}</p>
              		<img className="itemPhoto" src={prod.photo} />
            	</div>
          )}
    	</div>
    </div>
    )
  }
};