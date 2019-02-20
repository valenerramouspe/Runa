import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './menu.jsx'

export default class Home extends React.Component{
	constructor(props){
    super(props);
    //this.circulin=this.circulin.bind(this)
  }

// componentWillMount(){
//   this.circulin()
//}
// componentDidMount(){
//   this.circulin()
// }

// <div id="circulo" className="yellowCircle"></div>
//     </div>
  // circulin(){
  //   window.onload = function(){
  //     var bsDiv = document.getElementById("circulo");
  //     var blockHome = document.getElementById("blockHome")
  //     var x, y;
  //     setInterval(window.addEventListener('mousemove', function(event){
  //       x = event.clientX;
  //       y = event.clientY;

  //       if ( typeof x !== 'undefined' ){
  //         if(x < 700 && x > 500 && y < 400 && y > 200){
  //         bsDiv.style.left = x-250 + "px";
  //         bsDiv.style.top = y-250 + "px";
  //         }
  //       }
  //     }, 
  //     false
  //     )),300;
  //   }
  // }

  render(){
    return (
      <div id="home">
      <div id="blockHome">
      <div id="homeTop">
        <img src="../src/assets/homeTopRectangle.png" />
      </div>
      <div id="homeMiddle">
        <div id="textBlock">
          <img src="../src/assets/titulo.png" />
        </div>
        <img src="../src/assets/homeMiddleRectangle.png" />
      </div>
      <div id="homeBottom">
        <img src="../src/assets/homeBottomRectangle.png" />
      </div>
      <div><Menu /></div>
    </div>
    </div>
    )
  }
}


