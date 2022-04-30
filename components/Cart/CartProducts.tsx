import { Box } from '@mui/material';
import * as React from 'react';
import Product from '../Products/Product.interface';
import ProductItem from './CartProductItem';

type Props = {
  products: Product[];
};

const CartProducts: React.FunctionComponent<Props> = ({ products }) => {
  return (
    <Box>
      {products?.map((item) => (
        <ProductItem {...item} key={item?.id} />
      ))}
    </Box>
  );
};
export default CartProducts;
