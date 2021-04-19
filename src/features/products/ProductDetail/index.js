import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {Link, useParams} from 'react-router-dom';
import actions from '../../../actions';
import Col from 'reactstrap/lib/Col';
import combineClasses from '../../../utils/combineClasses';
import styles from '../Search/components/ProductCard.module.scss';
import Card from 'reactstrap/lib/Card';
import CardImg from 'reactstrap/lib/CardImg';
import CardBody from 'reactstrap/lib/CardBody';
import CardTitle from 'reactstrap/lib/CardTitle';
import Row from 'reactstrap/lib/Row';
import CardText from 'reactstrap/lib/CardText';
import Button from 'reactstrap/lib/Button';
import Spinner from 'reactstrap/lib/Spinner';
import ProductDetail from './ProductDetail';

const Product = (props) => {
		const {pID} = useParams();
		const dispatch = useDispatch()
		const product = useSelector(state => state.product);

		useEffect(() => {
				dispatch(actions.productActions.getProduct(pID))
		}, []);

		const productData = product?.products?.data;
		if (productData) {
				return (
								<ProductDetail product={productData} />
				)
		} else if (product.loading && !product.error) {
				return (<Spinner size="sm" color="secondary"/>)
		} else {
				return (<div>no product found</div>)
		}
}

export default Product;
