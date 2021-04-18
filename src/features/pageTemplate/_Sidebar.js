import React from 'react';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';

import Login from '../auth/components/Login';

const Sidebar = () => {

		return(
						<Row>
								<Col>
										<Login />
								</Col>
						</Row>
		)
}

export default Sidebar;
