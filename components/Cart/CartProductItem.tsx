import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import * as React from 'react';
import useCart from '../../hooks/useCart';
import Actions from '../Products/Actions';
import styles from './Cart.module.css';
type Props = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  qty: number;
  category: string;
};

const CartProductItem: React.FunctionComponent<Props> = ({
  id,
  title,
  description,
  price,
  image,
  qty,
  category,
}) => {
  const theme = useTheme();
  const isMD = useMediaQuery(theme.breakpoints.down('md'));
  const { addToCart, removeToCart, getQtyById } = useCart();
  const handleClickToIncrease = () => {
    addToCart({
      id,
      title,
      description,
      price,
      image,
      qty,
      category,
    });
  };
  const handleClickToDecrease = () => {
    removeToCart(id);
  };
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Box px="1rem" py="0.25rem" className={styles.item}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex">
            <Box
              maxWidth="130px"
              width="100%"
              border="1px solid var(--border)"
              p="0.25rem"
              maxHeight="130px"
              height="100%"
            >
              <Box
                component="img"
                src={image}
                width="100%"
                height="100%"
                alt={title}
              />
            </Box>
            <Box p="0.5rem">
              <Typography variant="h6" color="var(--primary)">
                {title}
              </Typography>
              <Box height="0.5rem" />
              <Typography
                variant="subtitle2"
                component="span"
                color="var(--text-muted)"
                sx={{ fontWeight: 'bold' }}
              >
                Category : {category}
              </Typography>
              <Box height="0.5rem" />

              <Actions
                count={getQtyById(id)}
                handleClickToIncrease={handleClickToIncrease}
                handleClickToDecrease={handleClickToDecrease}
              />
            </Box>
          </Box>
          <Box minWidth="100px">
            <Typography
              variant="h5"
              color="var(--primary)"
              sx={{ fontWeight: 'bold' }}
            >
              ${price}
              <Typography variant="subtitle2" color="text.secondarygi">
                Total - ${(price * qty).toFixed(2)}
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};
export default CartProductItem;
