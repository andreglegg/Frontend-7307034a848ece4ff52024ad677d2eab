import http from '../utils/http-common';

const getAllUsers = () => {
		return http.get('/users')
}

const getUser = async (email) => getAllUsers()
				.then(allUsers => {
						const findUser = allUsers.data.find(usr => usr.email === email);
						if (findUser) {
								return findUser
						} else {
								throw Error('User not found!')
						}
				})
				.catch(error => {
						throw new Error(error);
				});

const getAllProducts = () => {
		return http.get('/products');
};

const getProduct = (id) => {
		return http.get(`/products/${id}`);
};

const ShopService = {
		getAllUsers,
		getUser,
		getAllProducts,
		getProduct,
};

export default ShopService;
