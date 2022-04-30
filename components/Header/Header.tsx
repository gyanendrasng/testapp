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
import Brand from '../Common/Brand';
type Props = {
  children?: JSX.Element | JSX.Element[];
};

const Header: React.FunctionComponent<Props> = () => {
  const theme = useTheme();
  const isMD = useMediaQuery(theme.breakpoints.down('md'));
  const { dispatch } = useContext(AppContext);

  return (
    <Box bgcolor="var(--white)" borderBottom="1px solid var(--text-muted)">
      <Grid container>
        <Grid item xs={2} md={2}>
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
        <Grid item xs={8} md={8}>
          <Box display="flex" justifyContent="center">
            <Brand />
          </Box>
        </Grid>
        <Grid item xs={2} md={2}>
          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            height="100%"
          >
            {!isMD && (
              <Box
                display="flex"
                alignItems="center"
                color="var(--text-muted)"
                px="1rem"
              >
                <Typography variant="h6" component="span" color="inherit">
                  Login
                </Typography>
                <ArrowRightIcon color="inherit" />
              </Box>
            )}

            <Box
              bgcolor="var(--secondary)"
              color="var(--white)"
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
              <Typography variant="h6" component="span">
                0
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Header;
