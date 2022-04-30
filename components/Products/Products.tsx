import { Box, Grid, Typography } from '@mui/material';
import * as React from 'react';
import productsData from '../../data/productsData';
import Item from './Item';
import Product from './Product.interface';

type Props = {
  title: string;
  subTitle: string;
  products: Product[];
};

const Products: React.FunctionComponent<Props> = ({ title, subTitle }) => {
  return (
    <Box>
      <Box>
        <Typography variant="h3" color="var(--primary)">
          {title}
        </Typography>
        <Typography variant="subtitle1" color="var(--text-muted)">
          {subTitle}
        </Typography>
      </Box>
      <Grid container>
        {productsData.map((item) => (
          <Item {...item} key={item.id} />
        ))}
      </Grid>
    </Box>
  );
};
export default Products;
