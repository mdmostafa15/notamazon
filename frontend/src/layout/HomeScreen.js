// import { data } from '../data';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LoadingBox from '../components/LoadingBox';
import MassageBox from '../components/MassageBox';
import Product from '../components/Product';

function HomeScreen(props) {
  const [ products,  setProducts ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(false);
  useEffect(()=>{
    const fetchData = async ()=>{
      try {
        setLoading(true);
        const {data} = await axios.get('api/products');
        setLoading(false);
        setProducts(data);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
      
    }
    fetchData();
  },[]);
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