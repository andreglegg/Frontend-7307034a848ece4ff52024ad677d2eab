import * as actionTypes from '../actions/actionTypes';

const { LOG_IN, LOG_OUT } = actionTypes;

const currentUser = (state = {}, action) => {
		switch(action.type){
				case LOG_IN:
						return {
								...state,
								user: action.payload,
								loggedIn: true
						}
				case LOG_OUT:
						return {
								...state,
								user: {},
								loggedIn: false
						}
				default:
						return state
		}
}

export default currentUser;
