import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'

import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';

import actions from '../../../actions';
import Paginate from './components/Paginate';
import queryStringToJSON from '../../../utils/queryStringToJson';
import ProductCard from './components/ProductCard';
import SearchInput from './components/SearchInput';
import Spinner from 'reactstrap/lib/Spinner';

const Search = (props) => {
		const qs = queryStringToJSON(props?.location?.search);
		const products = useSelector(state => state.products);
		const dispatch = useDispatch()

		const page = qs.page || 1;
		const limit = qs.limit || 12;
		const searchString = qs.s || '';
		const totalProducts = products?.products?.headers["x-total-count"];

		useEffect(() => {
				dispatch(actions.searchActions.getProducts({s: searchString, page, limit}))
		}, [])

		const productsData = products?.products?.data;
		if (productsData) {
				return (
								<Row>
										<Col xs={12}>
												<SearchInput {...props} limit={limit} qSearchString={searchString}/>
										</Col>
										<Col xs={12}>
												<Row>
														{productsData && productsData.map(ProductCard)}
												</Row>
										</Col>
										<Col xs={12}>
												<Paginate paginationMeta={{page, limit, totalProducts, searchString}}/>
										</Col>
								</Row>
				)
		} else if (products.loading) {
				return (<Spinner size="sm" color="secondary"/>)
		} else {
				return (<div>no products found</div>)
		}
}

export default Search;
