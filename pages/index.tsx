import type { NextPage } from 'next';
import Layout from '../components/Layout/Layout';
import Products from '../components/Products/Products';
import productsData from '../data/productsData';
const Home: NextPage = () => {
  return (
    <Layout>
      <h2>Welcome to home page</h2>
      <Products
        title="Grocery Deals"
        subTitle="Amazing deals on Grocery items"
        products={productsData}
      />
    </Layout>
  );
};

export default Home;
