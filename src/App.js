import React, {useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux'

import actions from './actions';
import PageTemplate from './features/pageTemplate/PageTemplate';
import styles from './App.module.scss';

const App = () => {
		return(<PageTemplate>Smart hardware shop</PageTemplate>)
}

export default App;
