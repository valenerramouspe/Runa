import React from 'react'
import ReactDOM from 'react-dom'

export default class Startup extends React.Component{
	render(){
		return(
			<div className='fadeScreen'>
				<img id='startup' src="../assets/startup.jpeg" />
					<p id='title'>RUNA</p>

			</div>
		)
	}
}
