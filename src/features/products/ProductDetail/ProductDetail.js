import React from 'react';
import combineClasses from '../../../utils/combineClasses';
import Card from 'reactstrap/lib/Card';
import {Link} from 'react-router-dom';
import CardImg from 'reactstrap/lib/CardImg';
import CardBody from 'reactstrap/lib/CardBody';
import CardTitle from 'reactstrap/lib/CardTitle';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import CardText from 'reactstrap/lib/CardText';
import Button from 'reactstrap/lib/Button';
import styles from './ProductDetail.module.scss';
import formatPrice from '../../../utils/formatPrice';

const ProductDetail = (props) => {
		const { id, name, description, defaultImage, images, price, discount } = props?.product;
		return(
						<Col xs={12} className={combineClasses(styles.ProductCard, 'mb-5')} key={id}>
								<Card>
										<Link to={`/product/${id}`}>
												<CardImg top width="100%" src={defaultImage} alt={name}/>
										</Link>
										<CardBody>
												<div className={styles.Title}>
														<Link to={`/product/${id}`}>
																<CardTitle tag="h5">{name}</CardTitle>
														</Link>
												</div>
												<Row>
														<Col xs={12}>
																<p className={styles.Price}>
																		{formatPrice(price)} kr
																</p>
														</Col>
														<Col xs={12}>
																<p>
																		{description}
																</p>
														</Col>
														<Col xs={12}>
																<CardText>
																		<Button block color="success">Add to cart</Button>
																</CardText>
														</Col>
												</Row>

										</CardBody>
								</Card>
						</Col>
		)
}

export default ProductDetail;
