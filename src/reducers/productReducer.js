import { GET_PRODUCTS_BEGIN, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILURE } from '../actions/productActions';

const initialState = {}

const authReducer = (state = initialState, action) => {
		switch(action.type){
				case GET_PRODUCTS_BEGIN:
						return {
								...state,
								loading: true,
								error: null,
						}
				case GET_PRODUCTS_SUCCESS:
						return {
								...state,
								products: action.payload,
								loading: false,
						}
				case GET_PRODUCTS_FAILURE:
						return {
								...state,
								loading: false,
								error: action.payload.message,
						}
				default:
						return state
		}
}

export default authReducer;
