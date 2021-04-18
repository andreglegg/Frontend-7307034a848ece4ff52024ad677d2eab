import authReducer from './authReducer'
import productReducer from './productReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
		currentUser: authReducer,
		products: productReducer,
})

export default rootReducer
