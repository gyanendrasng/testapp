import type { NextPage, GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  const data = await res.json();
  console.log(data);

  return {
    props: {
      products: data,
    },
  };
};

interface Props {
  data: Array<Object>;
}

const CartDrawer: NextPage<Props> = (props) => {
  return <></>;
};

export default CartDrawer;
