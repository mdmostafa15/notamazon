import { combineReducers } from 'redux';
import proDetailsReducer from './productReducer';
import proListReducer from './productsReducer';

const reducer = combineReducers({
    productList: proListReducer,
    productDetails: proDetailsReducer
});

export default reducer;