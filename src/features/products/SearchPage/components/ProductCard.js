import React from 'react';
import {Link} from 'react-router-dom';
import CardImg from 'reactstrap/lib/CardImg';
import Card from 'reactstrap/lib/Card';
import CardBody from 'reactstrap/lib/CardBody';
import CardTitle from 'reactstrap/lib/CardTitle';
import CardText from 'reactstrap/lib/CardText';
import Col from 'reactstrap/lib/Col';
import Button from 'reactstrap/lib/Button';
import Row from 'reactstrap/lib/Row';

import combineClasses from '../../../../utils/combineClasses';
import styles from './ProductCard.module.scss'

const ProductCard = (product) => {
		const {id, name, description, defaultImage, images, price, discount} = product;
		return (
						<Col xs={12} md={4} className={combineClasses(styles.ProductCard, "mb-5")} key={id}>
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
												<CardText>
														<Row>
																<Col xs={12}>
																		<p className={styles.Price}>{price} kr</p>
																</Col>
																<Col xs={12}>
																	<Button block color="success">Add to cart</Button>
																</Col>
														</Row>
												</CardText>
										</CardBody>
								</Card>
						</Col>
		)
}

export default ProductCard;
