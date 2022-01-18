import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Rating from '../components/Rating';
import { data } from '../data';

function ProductScreen(props) {
    let params = useParams();
    // console.log(params.productId);
    const product = data.products.find((x)=>(x._id === params.productId));
    // console.log(product);
    if(!product){
        return (<div>Not Found</div>);
    }
    return (
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
                                    <div>{product.countInStock > 0?<span className='success'>In Stock</span>:<span className='error'>Unavailable</span>}</div>
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