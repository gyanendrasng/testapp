import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddIcon from '@mui/icons-material/Add';
import {
  Box,
  CardActionArea,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import * as React from 'react';
import { useContext } from 'react';
import { AppContext } from '../../../context/AppContext';
type ActionsButtonProps = {
  name: string;
  icon: JSX.Element;
};

const ActionsButton: React.FunctionComponent<ActionsButtonProps> = ({
  name,
  icon,
}) => {
  return (
    <Box
      // border="1px solid var(--border)"
      borderRadius="0.5rem"
      sx={{ overflow: 'hidden' }}
    >
      <CardActionArea>
        <Box
          display="flex"
          py="0.75rem"
          justifyContent="center"
          alignItems="center"
        >
          <Box color="var(--secondary)" fontSize="1.25rem">
            {icon}
          </Box>
          <Box width="0.5rem" />
          <Typography variant="h6" color="var(--primary)">
            {name}
          </Typography>
        </Box>
      </CardActionArea>
    </Box>
  );
};

const Actions: React.FunctionComponent<any> = () => {
  const {
    state: { isOpenMenuDrawer },
    dispatch,
  } = useContext(AppContext);
  const theme = useTheme();
  const isMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box bgcolor="var(--white)" borderBottom="1px solid var(--border)">
      <ActionsButton
        name="Login"
        icon={<AccountCircleIcon color="inherit" fontSize="inherit" />}
      />
      <ActionsButton
        name="Create an account"
        icon={<AddIcon color="inherit" fontSize="inherit" />}
      />
    </Box>
  );
};
export default Actions;
