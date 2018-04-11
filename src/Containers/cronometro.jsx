var React = require('react')
var ReactDOM = require('react-dom')
import Clock from '../Components/clock.jsx';
import Buttons from '../Components/buttons.jsx';


var Cronometro = React.createClass({
  getInitialState : function() {
    return {
      time: 0,
      started: false
    }
  },
  empezar: function(fn){
  if(!this.state.started) 
  this.interval = setInterval(fn, 100);
},
  clock: function() {
      console.log('entro')
      this.setState({
      started: true,
      time: this.state.time+100
    })

},
stop: function(){
  this.setState({
    started:false
  })
  clearInterval(this.interval)
},
reset: function(){
  this.setState({
    time:0,
    started:false
  })
},
  
  render: function(){
    return (
      <div>
        <div>
        	<Clock 
          time={this.state.time}
          />
          <Buttons
          clock={this.clock}
          empezar={this.empezar}
          terminar={this.stop}
          reset={this.reset}
          />
        </div>

      </div>
    )
  }
})

export default Cronometro;