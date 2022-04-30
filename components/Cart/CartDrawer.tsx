import { Box, Drawer } from '@mui/material';
import * as React from 'react';
import { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import { TOGGLE_CART_DRAWER } from '../../context/types';
import CartHeader from './CartHeader';
const CartDrawer: React.FunctionComponent<any> = () => {
  const {
    state: { isOpenCartDrawer },
    dispatch,
  } = useContext(AppContext);
  const [isOpen, setOpen] = useState(false);
  const handleClickToggle: any = () => {
    setOpen((value) => !value);
  };
  return (
    <Box bgcolor="var(--white)">
      <Drawer
        open={isOpenCartDrawer}
        onClose={() => dispatch({ type: TOGGLE_CART_DRAWER })}
        anchor="right"
      >
        <Box width="600px">
          <CartHeader isOpen={isOpen} handleClickToggle={handleClickToggle} />
        </Box>
      </Drawer>
    </Box>
  );
};
export default CartDrawer;
