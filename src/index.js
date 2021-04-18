import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux'

import 'bootstrap/dist/css/bootstrap.min.css';
import rootReducer from './reducers'
import App from './App';

const initialState = {
};

const store = createStore(
				rootReducer,
				initialState,
				window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
