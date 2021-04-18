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

const getPaginatedProducts = (query) => {
		const { page, limit } = query;
		return http.get(`/products?_page=${page}&_limit=${limit}`);
};

const getProduct = (id) => {
		return http.get(`/products/${id}`);
};

const ShopService = {
		getAllUsers,
		getUser,
		getAllProducts,
		getPaginatedProducts,
		getProduct,
};

export default ShopService;
