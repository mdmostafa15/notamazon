// import { data } from '../data';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBox from '../components/LoadingBox';
import MassageBox from '../components/MassageBox';
import Product from '../components/Product';
import { productListAct } from '../util/productActions';

function HomeScreen(props) {
  const dispatch = useDispatch();
  
  const productList = useSelector((state)=>{
    console.log("home :",state.productList);
    return state.productList;
  });

  useEffect(()=>{
    dispatch(productListAct())
  },[dispatch]);
  
  const {loading, products, error} = productList;

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