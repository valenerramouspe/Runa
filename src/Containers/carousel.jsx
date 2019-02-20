import React from 'react';
import ReactDOM from 'react-dom';
import Slider from 'react-slick';

export default class Carousel extends React.Component{
	  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
    	<div>
      <Slider {...settings}>
		{this.props.proyectos.map((component, i) =>
			<div key={i}>
				{this.props.proyectos[i]}
			</div>
		)}
		</Slider>
      </div>
    );
  }
}

