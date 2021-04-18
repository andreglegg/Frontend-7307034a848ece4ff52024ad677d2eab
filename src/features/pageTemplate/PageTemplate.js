import React from 'react';
import Container from 'reactstrap/lib/Container';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';

import Sidebar from './_Sidebar';
import Header from './_Header';

const PageTemplate = (props) => {
		const { children } = props;
		return(
						<Container>
								<Header />
								<Row>
										<Col xs={12} md={8}>
												{children}
										</Col>
										<Col xs={12} md={4}>
												<Sidebar/>
										</Col>
								</Row>
						</Container>
		)
}

export default PageTemplate;
