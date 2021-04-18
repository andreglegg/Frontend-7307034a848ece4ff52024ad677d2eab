import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux'
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

import 'bootstrap/dist/css/bootstrap.min.css';
import rootReducer from './reducers'
import App from './App';

const initialState = {
};

const store = createStore(
				rootReducer,
				initialState,
				composeWithDevTools(
								applyMiddleware(
												thunk
								)
				)
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
