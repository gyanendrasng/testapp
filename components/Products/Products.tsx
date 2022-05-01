import { Box, Typography } from '@mui/material';
import * as React from 'react';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import Container from '../Container/Container';
import Item from './Item';
import ItemSkeleton from './ItemSekeleton';
import styles from './Product.module.css';
type Props = {
  title: string;
  subTitle: string;
};

const Products: React.FunctionComponent<Props> = ({ title, subTitle }) => {
  const {
    state: { products, isProductsFetching },
  } = useContext(AppContext);
  return (
    <Box bgcolor="var(--white)">
      <Container>
        <Box py="2rem">
          <Box>
            <Typography variant="h3" color="var(--primary)">
              {title}
            </Typography>
            <Typography variant="subtitle1" color="var(--text-muted)">
              {subTitle}
            </Typography>
          </Box>
          <Box py="1rem" className={styles?.wrapper}>
            {isProductsFetching && (
              <>
                <ItemSkeleton />
                <ItemSkeleton />
                <ItemSkeleton />
                <ItemSkeleton />
                <ItemSkeleton />
                <ItemSkeleton />
                <ItemSkeleton />
                <ItemSkeleton />
              </>
            )}

            {!isProductsFetching &&
              products.map((item: any) => <Item {...item} key={item.id} />)}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
export default Products;
