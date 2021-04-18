import React from 'react';
import {useSelector} from 'react-redux'

import Login from './components/Login';
import LoggedIn from './components/LoggedIn';

const Auth = () => {
		const currentUser = useSelector(state => state.currentUser);

		if (currentUser.loggedIn) {
				return (
								<LoggedIn currentUser={currentUser}/>
				)
		} else {
				return <Login currentUser={currentUser} />
		}
}

export default Auth;
