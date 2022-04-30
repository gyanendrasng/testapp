import type { NextPage } from 'next';
import { useContext, useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import Products from '../components/Products/Products';
import { AppContext } from '../context/AppContext';
import {
  PRODUCTS_FETCH_SUCCESS,
  START_PRODUCTS_FETCH_LOADING,
  STOP_PRODUCTS_FETCH_LOADING,
} from '../context/types';
import useFetch from '../hooks/useFetch';
const Home: NextPage = () => {
  const { dispatch } = useContext(AppContext);
  const products = useFetch(
    'https://fakestoreapi.com/products',
    'Error',
    START_PRODUCTS_FETCH_LOADING,
    STOP_PRODUCTS_FETCH_LOADING
  );

  useEffect(() => {
    if (products) {
      dispatch({ type: PRODUCTS_FETCH_SUCCESS, payload: products });
    }
  }, [products]);
  return (
    <Layout>
      <Products
        title="Grocery Deals"
        subTitle="Amazing deals on Grocery items"
      />
    </Layout>
  );
};

export default Home;
