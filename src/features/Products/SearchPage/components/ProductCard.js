import React from 'react';
import CardImg from 'reactstrap/lib/CardImg';
import Card from 'reactstrap/lib/Card';
import CardBody from 'reactstrap/lib/CardBody';
import CardTitle from 'reactstrap/lib/CardTitle';
import CardText from 'reactstrap/lib/CardText';
import Col from 'reactstrap/lib/Col';
import Spinner from 'reactstrap/lib/Spinner';
import Button from 'reactstrap/lib/Button';

const ProductCard = (product) => {
		const {id, name, description, defaultImage, images, price, discount} = product;
		return(
						<Col xs={12} md={4} className="mb-5" key={id}>
						<Card>
								<CardImg top width="100%" src={defaultImage} alt={name} />
								<CardBody>
										<CardTitle tag="h5">{name}</CardTitle>
										<CardText>
												<Button block color="success">Add to cart</Button>
										</CardText>
								</CardBody>
						</Card>
						</Col>
		)
}

export default ProductCard;
