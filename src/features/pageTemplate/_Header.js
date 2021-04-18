import React from 'react';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';

import combineClasses from '../../utils/combineClasses';
import styles from './_Header.module.scss';

const Header = () => {
		return(
						<Row className={combineClasses(styles.Header,"p-4")}>
								<Col xs={12}>
										<h1 className="text-primary">Smart hardware shop</h1>
								</Col>
						</Row>
		)
}

export default Header;
