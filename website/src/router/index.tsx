import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Login from '../views/login'

const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Login}></Route>
			</Switch>
		</Router>
	)
}

export default Routes
