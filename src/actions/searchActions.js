import ShopService from '../services/ShopService';

export const GET_PRODUCTS_BEGIN = "GET_PRODUCTS_BEGIN";
export const GET_PRODUCTS_FAILURE = "GET_PRODUCTS_FAILURE";
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";

const getProductsBegin = (query) => {
		return {
				type: GET_PRODUCTS_BEGIN,
				payload: query
		}
}

const getProductsSuccess = (products) => {
		return {
				type: GET_PRODUCTS_SUCCESS,
				payload: products
		}
}

const getProductsFailure = (error) => {
		return {
				type: GET_PRODUCTS_FAILURE,
				payload: error
		}
}

const getProducts = (query) => {
		const { s, page, limit } = query;
		const newQuery = {s: s || '', page: page || 1, limit: limit || 12}
		return dispatch => {
				dispatch(getProductsBegin(newQuery));
				return ShopService.searchProducts(newQuery)
								.then(res => {
										dispatch(getProductsSuccess(res));
										return res
								})
								.catch(error =>
										dispatch(getProductsFailure(error))
								);
		}
}

export default {
		getProducts,
		getProductsBegin,
		getProductsSuccess,
		getProductsFailure
}
