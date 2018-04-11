import React from 'react'
import ReactDOM from 'react-dom'

export default class Buttons extends React.Component{
  constructor(props){
    super(props);
    this.start=this.start.bind(this)
  }
	start () {
    this.props.empezar(this.props.clock)
  }
  render(){
    return (
      <div>
      <button onClick={this.start} type="submit">Comenzar</button>
      <button onClick={this.props.terminar} type="submit">Parar</button>  
      <button onClick={this.props.reset} type="submit">Reiniciar</button>      
      </div>
    )
  }
};