import React from 'react';
import {Link} from 'react-router';

export default class Sidebar extends React.Component{
	render(){
		return(
			<div id='sidebar'>
				
				<div className="sidebarTextBlock">
					<p className="navigation">PROYECTOS</p>
						<p className="subtitle">UIWI FRUTAS</p>
						<p className="subtitle">PACKAGING</p>
				</div>

				<div className="sidebarTextBlock">
					<p className="navigation">PRODUCTOS</p>
						<p className="subtitle">GROWLER</p>
						<p className="subtitle">LAMP MIXTA</p>
						<p className="subtitle">ON BALANCE</p>
				</div>

				<div className="sidebarTextBlock">	
					<p className="subtitle">RED</p>
					<p className="subtitle">CONTACTO</p>
					<p className="subtitle">NOSOTRAS</p>
				</div>

			</div>
		)
	}
}