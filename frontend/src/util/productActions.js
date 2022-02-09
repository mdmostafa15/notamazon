import axios from "axios"
import { PRODUCT_LIST_fAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "./constants"

export const productListReqAction = () =>{
    return {
        type: PRODUCT_LIST_REQUEST
    }
}
export const productListSuccAction =(data)=>{
    return {
        type: PRODUCT_LIST_SUCCESS,
        payload: data
    }
}
export const productListFailAction= (err)=>{
    return {
        type: PRODUCT_LIST_fAIL,
        payload: err
    }
}

// load data from server api
export const productListAct =  ()=>{
    return (dispatch)=>{
        dispatch(productListReqAction());
        axios.get("/api/products")
        .then((res)=>{
            // console.log("acction res", res);
            const data = res.data;
            dispatch(productListSuccAction(data));
        })
        .catch(err=>{
            // console.log("acton err: ", err);
            const error = err.message;
            dispatch(productListFailAction(error));
        })
    }
}