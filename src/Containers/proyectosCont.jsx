import React from 'react';
import ReactDOM from 'react-dom';
import Slider from 'react-slick';
import Menu from '../Components/menu.jsx'
import Carousel from './Carousel.jsx';
import Proyecto1 from '../Components/proyecto1.jsx';
import Proyecto2 from '../Components/proyecto2.jsx'

export default class Proyectos extends React.Component{
	constructor(props){
		super(props);
			this.state = {
				position: 0,
				popup: 'closed'
		}
		this.slideRight=this.slideRight.bind(this);
		this.slideLeft=this.slideLeft.bind(this);
		this.menuVisibility=this.menuVisibility.bind(this)
		//this.circulin=this.circulin.bind(this)
	}

	// circulin(){
 //    window.onload = function(){
 //      var bsDiv = document.getElementById("circulo");
 //      var blockHome = document.getElementById("blockHome")
 //      var x, y;
 //      setInterval(window.addEventListener('mousemove', function(event){
 //        x = event.clientX;
 //        y = event.clientY;

 //        if ( typeof x !== 'undefined' ){
 //          if(x < 700 && x > 500 && y < 400 && y > 200){
 //          bsDiv.style.left = x-250 + "px";
 //          bsDiv.style.top = y-250 + "px";
 //          }
 //        }
 //      }, 
 //      false
 //      )),300;
 //    }
 //  }

	slideRight(){
		if(this.state.position < 1){
			this.setState({
				position : this.state.position + 1
			})
		}
	}

	slideLeft(){
		if(this.state.position > 0){
			this.setState({
				position : this.state.position - 1
			})
		}
	}

	menuVisibility(how){
		console.log('anda???')
		this.setState({
			popup: how
		})
	}

	render(){
		return(
		<div id='carousel'>
			<p className="galeria">Galería</p>
			<Carousel proyectos={[<Proyecto1 menuVisibility={this.menuVisibility} />, <Proyecto2 />]} />
			<div className={this.state.popup == 'closed' ? 'visibleMenu' : 'invisibleMenu'}><Menu highlight='Galeria' /></div>
		</div>
		)
	}
}