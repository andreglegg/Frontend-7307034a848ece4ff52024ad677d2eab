import React from 'react';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';

import Auth from '../auth';

const Sidebar = () => {

		return(
						<Row>
								<Col>
										<Auth />
								</Col>
						</Row>
		)
}

export default Sidebar;
