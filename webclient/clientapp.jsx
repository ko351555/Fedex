import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Dashboard from './components/dashboard';
import DisplayCard from './components/dashboard/displaycard';



ReactDOM.render(
	
	<MuiThemeProvider>
		<Router history={hashHistory}>
			<Route path="/" component={Dashboard} />
			<Route path="/card" component={DisplayCard} />

		</Router>
	</MuiThemeProvider>,
	
  	document.getElementById('mountapp')
);
