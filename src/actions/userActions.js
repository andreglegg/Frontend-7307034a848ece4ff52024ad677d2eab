import * as actionTypes from './actionTypes';

const { LOG_IN, LOG_OUT } = actionTypes;

const logIn = (user) => {
		return {
				type: LOG_IN,
				payload: user
		}
}

const logOut = () => {
		return {
				type: LOG_OUT
		}
}


export default {
		logIn,
		logOut
}
