import React, {useEffect} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

import './App.scss';

const App = () => {
		return(
						<Router>
										<Switch>
												<Route exact path={["/", "/product/"]} component={HomePage} />
												<Route path="/product/:id" component={ProductPage} />
										</Switch>
						</Router>
		)
}

export default App;
