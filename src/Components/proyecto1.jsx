import React from 'react';
import ReactDOM from 'react-dom'

export default class Proyecto1 extends React.Component{
	constructor(props){
		super(props);
		this.state={
			active: false
		}
		this.handleOpen=this.handleOpen.bind(this);
		this.handleClose=this.handleClose.bind(this)
	}

	handleOpen(){
		this.props.menuVisibility('open')
		this.setState({
			active: true
		})
	}

	handleClose(){
		this.props.menuVisibility('closed')
		this.setState({
			active: false
		})
	}
	render(){
		return(
			<div id="proyecto1">
				<div className={this.state.active ? 'coloredCuts' : 'cuts'}>
      				<div className={this.state.active ? 'hola' : 'cutTop'}>
        				<img src="../assets/algizTop.png" style={{cursor: 'pointer'}} onClick={() => this.handleOpen()} />
      				</div>
					<div className={this.state.active ? 'hola' : 'cutMiddle'}>
        				<img src="../assets/algizMiddle.png" style={{cursor: 'pointer'}} onClick={() => this.handleOpen()} />
      				</div>
      				<div className={this.state.active ? 'hola' : 'cutBottom'}>
        				<img src="../assets/algizBottom.png" style={{cursor: 'pointer'}} onClick={() => this.handleOpen()} />
      				</div>
      				<div className={this.state.active ? 'visible' : 'invisible'}>
						<p className='productTitle'> ALGIZ </p>
      					<p className='productDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in nisi id nunc consectetur porta et ac lorem. Nunc fringilla condimentum augue vitae tincidunt. Curabitur pharetra imperdiet turpis, quis commodo felis viverra vel. Phasellus consequat, arcu ut faucibus gravida, nisi massa dignissim nulla, et interdum eros tellus in risus. Quisque pulvinar sollicitudin neque, nec congue dui varius finibus. Mauris tristique facilisis odio, id dictum leo egestas vitae. Praesent ac lectus in nunc dapibus laoreet ac sed leo. Suspendisse felis orci, vehicula in ornare eget, euismod sit amet mauris. Duis et velit auctor, euismod nibh at, porta sapien. Aenean vehicula, ex non commodo tristique, urna sem pretium lorem, eget pellentesque erat massa at massa. Nam consequat purus venenatis blandit blandit</p>
					</div>
					<div style={{display: 'none'}}id="circulo" className="greenCircle"></div>
					<div onClick={() => this.handleClose()} className='exit'>X</div>
				</div>
			</div>
		)
	}
}