import React from 'react';
import Product from '../components/Product';
import { data } from '../data';

function HomeScreen(props) {
  return (
    <div>
      <div className="cus-row center">
        {
          data.products.map(product=>(
            <Product key={product._id} product={product} />
          ))
        }
      </div>
    </div>
  );
}

export default HomeScreen;