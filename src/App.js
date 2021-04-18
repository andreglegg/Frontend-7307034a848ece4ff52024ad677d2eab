import React, {useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux'

import actions from './actions';
import PageTemplate from './features/pageTemplate/PageTemplate';
import styles from './App.module.scss';

const App = () => {
		const currentUser = useSelector(state => state.currentUser);
		const dispatch = useDispatch()

		const user = {name: "Rei"}
		useEffect(() => {
				dispatch(actions.userActions.logIn(user))
		}, [])
		console.log('currentUser', currentUser);

		return(<PageTemplate>Smart hardware shop</PageTemplate>)
}

export default App;
