import { Box, Collapse, Drawer, useMediaQuery, useTheme } from '@mui/material';
import * as React from 'react';
import { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import { TOGGLE_CART_DRAWER } from '../../context/types';
import productsData from '../../data/productsData';
import CartFooter from './CartFooter';
import CartHeader from './CartHeader';
import CartProducts from './CartProducts';

const CartDrawer: React.FunctionComponent<any> = () => {
  const {
    state: { isOpenCartDrawer },
    dispatch,
  } = useContext(AppContext);
  const theme = useTheme();
  const isMD = useMediaQuery(theme.breakpoints.down('md'));
  const [isOpen, setOpen] = useState(true);
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
        <Box
          width={isMD ? '400px' : '700px'}
          display="flex"
          flexDirection="column"
          alignItems="space-between"
          justifyContent="space-between"
          height="100%"
        >
          <Box>
            <CartHeader isOpen={isOpen} handleClickToggle={handleClickToggle} />
            <Box>
              <Collapse in={isOpen} timeout="auto" unmountOnExit>
                <Box maxHeight="600px" py="0.5rem" sx={{ overflowY: 'auto' }}>
                  <CartProducts products={productsData} />
                </Box>
              </Collapse>
            </Box>
          </Box>
          <CartFooter />
        </Box>
      </Drawer>
    </Box>
  );
};
export default CartDrawer;
