import http from '../utils/http-common';

const getAllUsers = () => {
		return http.get('/users')
}

const getUser = async (email) => {
		return http.get(`/users?email=${email}`)
						.then(res => {
								const user = res.data[0];
								if (user){
										return user;
								} else {
										throw new Error("user not found")
								}
						}).catch(error => {
								throw new Error(error);
						});
}

const getAllProducts = () => {
		return http.get('/products');
};

const searchProducts = (query) => {
		const { s, page, limit } = query;
		return http.get(`/products?q=${s}&_page=${page}&_limit=${limit}`);
};

const getProduct = (id) => {
		return http.get(`/products/${id}`);
};

const ShopService = {
		getAllUsers,
		getUser,
		getAllProducts,
		searchProducts,
		getProduct,
};

export default ShopService;
