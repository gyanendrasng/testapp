import HomeIcon from '@mui/icons-material/Home';
import {
  Box,
  Drawer,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import * as React from 'react';
import { useContext } from 'react';
import { AppContext } from '../../../context/AppContext';
import { TOGGLE_MENU_DRAWER } from '../../../context/types';
import Actions from './Actions';
import CategoriesList from './CategoriesList';
const SidebarDrawer: React.FunctionComponent<any> = () => {
  const {
    state: { isOpenMenuDrawer },
    dispatch,
  } = useContext(AppContext);
  const theme = useTheme();
  const isMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box bgcolor="var(--white)">
      <Drawer
        open={isOpenMenuDrawer}
        onClose={() => dispatch({ type: TOGGLE_MENU_DRAWER })}
        anchor="left"
      >
        <Box width="300px">
          <Actions />
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
          <CategoriesList />
        </Box>
      </Drawer>
    </Box>
  );
};
export default SidebarDrawer;
