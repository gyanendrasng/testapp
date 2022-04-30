import { Box, useMediaQuery, useTheme } from '@mui/material';
import * as React from 'react';
import CartDrawer from '../Cart/CartDrawer';
import Header from '../Header/Header';
import SidebarDrawer from '../Sidebar/Drawer/Drawer';
import Sidebar from '../Sidebar/Sidebar';
type Props = {
  children?: JSX.Element | JSX.Element[];
};

const Layout: React.FunctionComponent<Props> = ({ children }) => {
  const theme = useTheme();
  const isMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box display="flex" height="100%" bgcolor="var(--white-gray)">
      {isMD ? <SidebarDrawer /> : <Sidebar />}
      <CartDrawer />
      <Box flexGrow="1">
        <Header />
        <Box>{children}</Box>
      </Box>
    </Box>
  );
};
export default Layout;
