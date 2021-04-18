import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import Col from 'reactstrap/lib/Col';
import Form from 'reactstrap/lib/Form';
import FormGroup from 'reactstrap/lib/FormGroup';
import Label from 'reactstrap/lib/Label';
import Input from 'reactstrap/lib/Input';
import Button from 'reactstrap/lib/Button';
import Spinner from 'reactstrap/lib/Spinner';
import Alert from 'reactstrap/lib/Alert';

import actions from '../../../actions';


const Login = (props) => {
		const {loading, error} = props.currentUser;
		const [email, setEmail] = useState('');
		const dispatch = useDispatch();

		const handleLoginAttempt = (event) => {
				event.preventDefault();
				dispatch(actions.userActions.logIn(email))
		}

		const handleInputChange = (event) => {
				event.preventDefault();
				const newValue = event.target.value;
				setEmail(newValue);
		}

		return (
						<Form onSubmit={handleLoginAttempt}>
								<FormGroup row>
										<Label for="login" sm={2}>Login</Label>
										<Col sm={10}>
												<Input type="email" name="email" id="exampleEmail" placeholder="email address" value={email}
												       onChange={handleInputChange}/>
										</Col>
								</FormGroup>
								<FormGroup row>
										{error ?
														(<Col xs={12}>
																<Alert color="danger">
																		{error}
																</Alert>
														</Col>) : ''}
										<Col xs={12}>
												<Button block disabled={loading} color="primary">{loading ? (
																<Spinner size="sm" color="secondary"/>) : 'Login'}</Button>
										</Col>
								</FormGroup>
						</Form>
		)
}

export default Login;
