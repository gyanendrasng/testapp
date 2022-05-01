import {
  ArrowRight as ArrowRightIcon,
  Menu as MenuIcon,
  ShoppingBasket as ShoppingBasketIcon,
} from '@mui/icons-material';
import {
  Box,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import * as React from 'react';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { TOGGLE_CART_DRAWER, TOGGLE_MENU_DRAWER } from '../../context/types';
import useCart from '../../hooks/useCart';
import Brand from '../Common/Brand';
type Props = {
  children?: JSX.Element | JSX.Element[];
};

const Header: React.FunctionComponent<Props> = () => {
  const theme = useTheme();
  const isMD = useMediaQuery(theme.breakpoints.down('md'));
  const isXS = useMediaQuery(theme.breakpoints.down('xs'));
  const { dispatch } = useContext(AppContext);
  const { getTotalItems } = useCart();
  return (
    <Box bgcolor="var(--white)" borderBottom="1px solid var(--text-muted)">
      <Grid container>
        <Grid item xs={2} sm={2} md={2}>
          {isMD && (
            <Box display="flex" alignItems="center" height="100%">
              <IconButton
                color="inherit"
                size="large"
                onClick={() => dispatch({ type: TOGGLE_MENU_DRAWER })}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          )}
        </Grid>
        <Grid item xs={3} sm={6} md={8}>
          <Box display="flex" justifyContent="center">
            <Brand />
          </Box>
        </Grid>
        <Grid item xs={7} sm={4} md={2}>
          <Box
            display="flex"
            justifyContent={isXS ? 'flex-start' : 'flex-end'}
            alignItems="center"
            height="100%"
          >
            {!isMD && (
              <Box
                display="flex"
                alignItems="center"
                color="var(--text-muted)"
                px="1rem"
                sx={{ cursor: 'pointer' }}
              >
                <Typography variant="h6" component="span" color="inherit">
                  Login
                </Typography>
                <ArrowRightIcon color="inherit" />
              </Box>
            )}

            <Box
              bgcolor={
                getTotalItems() === 0 ? 'var(--primary)' : 'var(--secondary)'
              }
              color={
                getTotalItems() === 0 ? 'var(--secondary)' : 'var(--white)'
              }
              display="flex"
              alignItems="center"
              height="100%"
              maxWidth="100px"
              width="100%"
              minWidth="80px"
              justifyContent="center"
              sx={{ cursor: 'pointer' }}
              onClick={() => dispatch({ type: TOGGLE_CART_DRAWER })}
            >
              <ShoppingBasketIcon />
              <Box width="0.25rem" />
              {getTotalItems() !== 0 && (
                <Typography variant="h6" component="span">
                  {getTotalItems()}
                </Typography>
              )}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Header;
