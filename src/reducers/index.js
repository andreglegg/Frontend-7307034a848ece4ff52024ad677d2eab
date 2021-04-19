import {combineReducers} from 'redux'

import authReducer from './authReducer'
import searchReducer from './searchReducer'
import productReducer from './productReducer'

const rootReducer = combineReducers({
		currentUser: authReducer,
		products: searchReducer,
		product: productReducer,
})

export default rootReducer
