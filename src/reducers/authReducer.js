import { LOG_IN_BEGIN, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT } from '../actions/userActions';

const initialState = {}

const authReducer = (state = initialState, action) => {
		switch(action.type){
				case LOG_IN_BEGIN:
						return {
								...state,
								loading: true,
								error: null,
								loggedIn: false,
						}
				case LOG_IN_SUCCESS:
						return {
								...state,
								user: action.payload,
								loading: false,
								loggedIn: true,
						}
				case LOG_IN_FAILURE:
						return {
								...state,
								loading: false,
								error: action.payload.message,
								loggedIn: false,
						}
				case LOG_OUT:
						return {
								...state,
								user: {},
								error: false,
								loggedIn: false,
						}
				default:
						return state
		}
}

export default authReducer;
