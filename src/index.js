import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Components/main.jsx';
import Start from './Containers/start.jsx';
import Home from './Containers/home.jsx';
import {Router, Route, hashHistory, IndexRoute} from 'react-router'

ReactDOM.render((
	<Router history={hashHistory}>
    	<Route path="/" component={Main}>
    		<IndexRoute component={Start}/>
    		<Route path="home" component={Home}/>
    	</Route>
  	</Router>
	), document.getElementById('app'));

	