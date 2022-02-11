import { PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS } from "../constants";

const initState = {
    loading: false,
    product:[],
    error: ''
}
const proDetailsReducer =(state=initState, action)=>{
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return {
                ...state,
                loading:true
            };
        case PRODUCT_DETAILS_SUCCESS: 
        return {
            ...state,
            product: action.payload,
            loading: false
        }
        case PRODUCT_DETAILS_FAIL:
            return {
                ...state,
                error: action.payload,
                loading:false
            }
    
        default:
            return state;
    }
}

export default proDetailsReducer;