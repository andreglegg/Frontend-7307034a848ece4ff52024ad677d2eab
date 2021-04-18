import ShopService from '../services/ShopService';
export const LOG_IN_BEGIN = "LOG_IN_BEGIN";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";
export const LOG_OUT = "LOG_OUT";

const logInBegin = (email) => {
		return {
				type: LOG_IN_BEGIN,
				payload: email
		}
}

const logInSuccess = (user) => {
		return {
				type: LOG_IN_SUCCESS,
				payload: user
		}
}

const logInFailure = (error) => {
		return {
				type: LOG_IN_FAILURE,
				payload: error
		}
}

const logIn = (email) => {
		return dispatch => {
				dispatch(logInBegin(email));
				return ShopService.getUser(email)
								.then(res => {
										dispatch(logInSuccess(res));
										return res
								})
								.catch(error =>
										dispatch(logInFailure(error))
								);
		}
}

const logOut = () => {
		return {
				type: LOG_OUT
		}
}

export default {
		logIn,
		logInBegin,
		logInSuccess,
		logInFailure,
		logOut
}
