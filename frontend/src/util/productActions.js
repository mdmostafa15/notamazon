import axios from "axios"
import { PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "./constants"
// products list actions
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
        type: PRODUCT_LIST_FAIL,
        payload: err
    }
}

// define function to load data from server api
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

// single product details actions
export const productDetailsReqAction = () =>{
    return {
        type: PRODUCT_DETAILS_REQUEST
    }
}
export const productDetailsSuccAction =(data)=>{
    return {
        type: PRODUCT_DETAILS_SUCCESS,
        payload: data
    }
}
export const productDetailsFailAction= (err)=>{
    return {
        type: PRODUCT_DETAILS_FAIL,
        payload: err
    }
}

// define function to load single product data from server api
export const productDetailsAct = (productId) =>{
    return (dispatch)=>{
        dispatch(productDetailsReqAction());
        axios.get(`/api/products/${productId}`)
        .then((res)=>{
            // console.log("acction res", res);
            const data = res.data;
            dispatch(productDetailsSuccAction(data));
        })
        .catch(err=>{
            // console.log("acton err: ", err);
            const error = err.message;
            dispatch(productDetailsFailAction(error));
        })
    }
}