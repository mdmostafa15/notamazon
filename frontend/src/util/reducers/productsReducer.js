import { PRODUCT_LIST_fAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants";

const initState = {
    loading: false,
    products:[],
    error: ''
}
const proListReducer =(state=initState, action)=>{
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return {
                ...state,
                loading:true
            };
        case PRODUCT_LIST_SUCCESS: 
        return {
            ...state,
            products: action.payload,
            loading: false
        }
        case PRODUCT_LIST_fAIL:
            return {
                ...state,
                products: [],
                error: action.payload,
                loading:false
            }
    
        default:
            return state;
    }
}

export default proListReducer;