import { GET_PRODUCT_DETAIL_BEGIN, GET_PRODUCT_DETAIL_SUCCESS, GET_PRODUCT_DETAIL_FAILURE } from '../actions/productActions';

const initialState = {}

const productReducer = (state = initialState, action) => {
		switch(action.type){
				case GET_PRODUCT_DETAIL_BEGIN:
						return {
								...state,
								loading: true,
								error: null,
						}
				case GET_PRODUCT_DETAIL_SUCCESS:
						return {
								...state,
								products: action.payload,
								loading: false,
						}
				case GET_PRODUCT_DETAIL_FAILURE:
						return {
								...state,
								loading: false,
								error: action.payload.message,
						}
				default:
						return state
		}
}

export default productReducer;
