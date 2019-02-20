import React from 'react';
import ReactDOM from 'react-dom'
import Menu from './menu.jsx'

export default class Nosotras extends React.Component{
	render(){
		return(
			<div className='headerNosotras'>
				<img style={{height: '100%', float: 'right', width: '700px'}} src='../src/assets/nosotrasHeader.png' />
				<div className='transparentBlock' />
				<div className='tituloNosotras'> 
					<img src='../src/assets/titulo.png' />
					<img style={{height: '100%'}} src='../src/assets/logoNosotras.png' />
				</div>
				<div className='subtitleNosotras'>
					<p style={{fontSize: '20px'}}>Packaging Bio, Diseño Estratégico Sustentable</p>
					<p style={{fontSize: '15px'}}>Proponemos soluciones de packaging sustentable, totalmente compostables, y con propiedades similares a las del empaque de plástico convencional</p>
				</div>
				<div className='nosotrasLowerBlock'>
					<div style={{margin: 'auto', width: '60%'}}>
						<div className='nosotrasLeftColumn'>
							<p className='taglineNosotras'>COMPRENDER</p>
							<p className='taglineNosotras'>OBSERVAR</p>
							<p className='taglineNosotras'>DEFINIR</p>
							<p className='taglineNosotras'>IDEAR</p>
							<p className='taglineNosotras'>PROTOTIPAR</p>
							<p className='taglineNosotras'>TESTEAR</p>
							<p className='taglineNosotras'>IMPLEMENTAR</p>
						</div>
						<div className='nosotrasRightColumn'>
							<p className='textNosotras'>Runa Taller es un estudio de diseño dedicado a la implementación de las nuevas tecnologías en el rubro alimenticio diseñando sosteniblemente.</p>
							<p className='textNosotras'>Rechaza - Reutiliza - Recicla<br></br>En todos nuestros proyectos evitamos la utilización de recursos no renovables con el objetivo de reducir nuestra huella de Carbono y la de nuestros clientes.</p>
							<p className='textNosotras'>Desarrollamos Maquinaria acorde a sus necesidades y podemos asesorarlo en su distribución de planta para eficientizar su producción.</p>
						</div>'
					</div>
				</div>
			</div>
		)
	}
}


//<div className='nosotrasMenu'><Menu highlight='Nosotras' /></div>