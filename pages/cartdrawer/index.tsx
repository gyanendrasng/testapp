import type { NextPage, GetStaticProps } from 'next';
import Cards from 'components/card/card';

interface Props {
  data: Array<Object>;
}

const CartDrawer: NextPage<Props> = (props: any) => {
  return (
    <>
      <Cards
        image={props.products[0].image}
        title={props.products[0].title}
        id={props.products[0].id}
        price={props.products[0].price}
        category={props.products[0].category}
        description={props.products[0].description}
      />
    </>
  );
};

export default CartDrawer;

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
