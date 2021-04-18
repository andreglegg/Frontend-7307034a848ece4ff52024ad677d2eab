import React from 'react';
import {useDispatch} from 'react-redux';
import Button from 'reactstrap/lib/Button';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';

import actions from '../../../actions';

const LoggedIn = (props) => {
		const {user} = props.currentUser;
		const dispatch = useDispatch();
		return (
						<Row>
								<Col xs={12}>
										Welcome back <strong>{user?.name?.firstName}</strong>!
								</Col>
								<Col xs={12}>
										<Button block color="primary" onClick={() => dispatch(actions.userActions.logOut())}>Logout</Button>
								</Col>
						</Row>
		)
}

export default LoggedIn;
