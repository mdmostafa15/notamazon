/**
 * @using Components ...
 * <MassageBox> // product not found
 * <Rating> // reviews 
 * displaying single product details ...
 */
// 
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import LoadingBox from '../components/LoadingBox';
import MassageBox from '../components/MassageBox';
import Rating from '../components/Rating';
import { productDetailsAct } from '../util/productActions';

function ProductScreen(props) {
    // extracting param from url
    let params = useParams();
    const productId = params.productId;
    // console.log(params.productId);

    // read data from store usindg react-redux hooks
  const dispatch = useDispatch();
  const productDetails = useSelector((state)=>{
    console.log("home :",state.productDetails);
    return state.productDetails;
  });
  const {loading, product, error} = productDetails;
    // load date to redux store calling action of product List
    useEffect(()=>{
        dispatch(productDetailsAct(productId))
      },[dispatch, productId]);

      

    return (
            loading?<LoadingBox />
            :error?
            <MassageBox variant='danger'>{error}</MassageBox>
            :
          <div>
            <Link to='/'>back to home</Link>
            <div className='cus-row top'>
                <div className='col-2'>
                    <img className='large' src={product.image} alt={product.name} />
                </div>
                <div className='col-1'>
                    <ul>
                        <li>
                            <h1>{product.name}</h1>
                        </li>
                        <li>
                            <Rating rating={product.rating} reviews={product.numReviews} />
                        </li>
                        <li>Price: ${product.price}</li>
                        <li>
                            Descriptions: <p>{product.descriptions}</p>
                        </li>
                    </ul>
                </div>
                <div className='col-1'>
                    <div className='card card-body'>
                        <ul>
                            <li>
                                <div className='cus-row'>
                                    <div>Price</div>
                                    <div className='price'>${product.price}</div>
                                </div>
                            </li>
                            <li>
                                <div className='cus-row'>
                                    <div>Status</div>
                                    <div>{product.countInStock > 0?<span className='success'>In Stock</span>:<span className='danger'>Unavailable</span>}</div>
                                </div>
                            </li>
                            <li>
                                <button className='primary block'>Add to cart</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductScreen;