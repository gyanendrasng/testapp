import { Box, Drawer } from '@mui/material';
import * as React from 'react';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { TOGGLE_CART_DRAWER } from '../../context/types';

const CartFooter: React.FunctionComponent<any> = () => {
  const {
    state: { isOpenCartDrawer },
    dispatch,
  } = useContext(AppContext);
  return (
    <Box bgcolor="var(--white)">
      <Drawer
        open={isOpenCartDrawer}
        onClose={() => dispatch({ type: TOGGLE_CART_DRAWER })}
        anchor="right"
      >
        Cart Drawer
      </Drawer>
    </Box>
  );
};
export default CartFooter;
