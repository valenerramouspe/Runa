import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Components/main.jsx';
import Home from './Components/home.jsx';
import Proyectos from './Containers/proyectosCont.jsx';
import Nosotras from './Components/nosotras.jsx';
import {Router, Route, hashHistory, IndexRoute} from 'react-router'

ReactDOM.render((
	<Router history={hashHistory}>
    	<Route path="/" component={Main}>
    		<IndexRoute component={Home}/>
    		<Route path="home" component={Home}/>
    		<Route path="galeria" component={Proyectos}/>
    		<Route path="nosotras" component={Nosotras} />
    	</Route>
  	</Router>
	), document.getElementById('app'));

	