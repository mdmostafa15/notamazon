/**
 * displaying products to screen calling <Product> component
 * @using Components on ...
 * <LoadingBox> // loading page
 * <MessageBox> // provide error message
 */

// import dependencies...
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBox from '../components/LoadingBox';
import MassageBox from '../components/MassageBox';
import Product from '../components/Product';
import { productListAct } from '../util/productActions';

function HomeScreen(props) {
// read data from store usindg react-redux hooks
  const dispatch = useDispatch();
  const productList = useSelector((state)=>{
    console.log("home :",state.productList);
    return state.productList;
  });
  const {loading, products, error} = productList;

  // load date to redux store calling action of product List
  useEffect(()=>{
    dispatch(productListAct())
  },[dispatch]);
  
  return (
    <div>
      {
        loading?<LoadingBox />
        :error?
        <MassageBox variant='danger'>{error}</MassageBox>
        :<div className="cus-row center">
        {
          products.map(product=>(
            <Product key={product._id} product={product} />
          ))
        }
      </div>
      }
      
    </div>
  );
}

export default HomeScreen;