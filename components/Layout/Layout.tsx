import { Box, useMediaQuery, useTheme } from '@mui/material';
import * as React from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

type Props = {
  children?: JSX.Element | JSX.Element[];
};

const Layout: React.FunctionComponent<Props> = ({ children }) => {
  const theme = useTheme();
  const isMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box display="flex" height="100%" bgcolor="var(--white-gray)">
      {!isMD && <Sidebar />}

      <Box flexGrow="1">
        <Header />
        <Box>{children}</Box>
      </Box>
    </Box>
  );
};
export default Layout;
