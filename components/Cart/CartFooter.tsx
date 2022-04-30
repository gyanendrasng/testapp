import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Box, Typography } from '@mui/material';
import * as React from 'react';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
type Props = {
  totalItem: string;
  totalPrice: string;
};

const CartFooter: React.FunctionComponent<Props> = ({
  totalItem,
  totalPrice,
}) => {
  const {
    state: { isOpenCartDrawer },
    dispatch,
  } = useContext(AppContext);
  return (
    <Box bgcolor="var(--white)" borderTop="1px solid var(--border)">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        p="0.75rem"
      >
        <Typography variant="h5" color="var(--primary)">
          Total Item{' '}
          <Typography variant="h5" component="span" color="text.secondary">
            ({totalItem || 0})
          </Typography>
        </Typography>
        <Typography variant="h5">{totalPrice || 0}</Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
        bgcolor="var(--secondary)"
        color="var(--white)"
        px="0.5rem"
        py="1.5rem"
      >
        <Box fontSize="2rem">
          <ShoppingBasketIcon color="inherit" fontSize="inherit" />
        </Box>
        <Box width="0.5rem" />
        <Typography variant="h5">Process to checkout</Typography>
      </Box>
    </Box>
  );
};
export default CartFooter;
