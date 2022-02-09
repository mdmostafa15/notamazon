import { combineReducers } from 'redux';
import proListReducer from './productsReducer';

const reducer = combineReducers({
    productList: proListReducer
});

export default reducer;