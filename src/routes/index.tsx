import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

const Routes: React.FC = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/" exact component={Home} />
			<Route component={NotFound} />
		</Switch>
	</BrowserRouter>
);

export default Routes;
