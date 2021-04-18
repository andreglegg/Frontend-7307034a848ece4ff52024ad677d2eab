import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import Form from 'reactstrap/lib/Form';
import InputGroup from 'reactstrap/lib/InputGroup';
import Input from 'reactstrap/lib/Input';

const SearchInput = (props) => {
		const { history, limit } = props;
		const [searchString, setSearchString] = useState('');

		const handleInputChange = (event) => {
				event.preventDefault();
				const newValue = event.target.value;
				setSearchString(newValue);
		}
		const handleSubmit = (event) => {
				event.preventDefault();
				history.push(`/?s=${searchString}&page=0&limit=${limit}`)
		}
		return (
						<Form className="mb-4" onSubmit={handleSubmit}>
								<InputGroup>
										<Input type="text" name="s" id="search" placeholder="eg. Fresh Tuna, Frozen Car" value={searchString} onChange={handleInputChange}/>
								</InputGroup>
						</Form>
		)
};

export default SearchInput;
