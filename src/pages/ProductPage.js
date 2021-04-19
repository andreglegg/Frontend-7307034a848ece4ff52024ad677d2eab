import React from "react";

import PageTemplate from '../features/pageTemplate/PageTemplate';
import ProductDetail from '../features/products/ProductDetail';

const ProductPage = (props) => {
		return(
						<PageTemplate>
								<ProductDetail {...props} />
						</PageTemplate>
		)
}

export default ProductPage;
