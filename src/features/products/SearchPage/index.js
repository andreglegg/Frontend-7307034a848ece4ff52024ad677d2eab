import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'

import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';

import actions from '../../../actions';
import Paginate from './components/Paginate';
import queryStringToJSON from '../../../utils/queryStringToJson';
import ProductCard from './components/ProductCard';

const SearchPage = (props) => {
		const qs = queryStringToJSON(props?.location?.search);
		const products = useSelector(state => state.products);
		const dispatch = useDispatch()

		const page = qs.page || 1;
		const limit = qs.limit || 12;
		const totalProducts = products?.products?.headers["x-total-count"];

		useEffect(() => {
				dispatch(actions.productActions.getProducts({page, limit}))
		}, [])

		return(
						<Row>
								<Col xs={12}>
										<Row>
											{products?.products?.data && products.products.data.map(ProductCard)}
										</Row>
								</Col>
								<Col xs={12}>
										<Paginate paginationMeta={{page, limit, totalProducts}} />
								</Col>
						</Row>
		)
}

export default SearchPage;
