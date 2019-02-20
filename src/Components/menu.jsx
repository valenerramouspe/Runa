import React from 'react';
import ReactDOM from 'react-dom';
import Link from 'react-router';

export default class Menu extends React.Component{
	constructor(props){
		super(props);
		this.state={
			selected: this.props.highlight
		}
	}
	render(){
		return(
			<div className="navbar">
  				<a className={ this.state.selected == 'Nosotras' ? 'selected' : 'idle' } onClick={() => this.setState({ selected: 'Nosotras' })} href="#nosotras">Nosotras</a>
  				<a className={ this.state.selected == 'Galeria' ? 'selected' : 'idle' } onClick={() => this.setState({ selected: 'Galeria' })} href="#galeria">Proyectos</a>
  				<a className={ this.state.selected == 'Tienda Online' ? 'selected' : 'idle' } onClick={() => this.setState({ selected: 'Tienda Online' })} href="#tienda">Packaging Bio</a>
			</div>
		)
	}
}