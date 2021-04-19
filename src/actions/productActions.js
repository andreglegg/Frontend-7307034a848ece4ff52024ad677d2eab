import ShopService from '../services/ShopService';

export const GET_PRODUCT_DETAIL_BEGIN = "GET_PRODUCT_DETAIL_BEGIN";
export const GET_PRODUCT_DETAIL_FAILURE = "GET_PRODUCT_DETAIL_FAILURE";
export const GET_PRODUCT_DETAIL_SUCCESS = "GET_PRODUCT_DETAIL_SUCCESS";

const getProductDetailBegin = (id) => {
		return {
				type: GET_PRODUCT_DETAIL_BEGIN,
				payload: id
		}
}

const getProductDetailSuccess = (product) => {
		return {
				type: GET_PRODUCT_DETAIL_SUCCESS,
				payload: product
		}
}

const getProductDetailFailure = (error) => {
		return {
				type: GET_PRODUCT_DETAIL_FAILURE,
				payload: error
		}
}

const getProduct = (id) => {
		return dispatch => {
				dispatch(getProductDetailBegin(id));
				return ShopService.getProduct(id)
								.then(res => {
										dispatch(getProductDetailSuccess(res));
										return res
								})
								.catch(error =>
										dispatch(getProductDetailFailure(error))
								);
		}
}

export default {
		getProduct,
		getProductDetailBegin,
		getProductDetailSuccess,
		getProductDetailFailure
}
