import { Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import * as React from 'react';
import smallLogoSrc from '../../assets/logo-small.png';

type Props = {
  isOpen: boolean;
  handleClickToggle: () => void;
};

const CartHeader: React.FunctionComponent<Props> = ({
  isOpen,
  handleClickToggle,
}) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItem="center"
      p="2rem"
      sx={{ cursor: 'pointer' }}
      onClick={handleClickToggle}
      borderBottom="1px solid var(--border)"
    >
      <Box display="flex" alignItems="center">
        <Box marginRight="1rem">
          <Image src={smallLogoSrc} width="50px" height="50px" alt="Logo" />
        </Box>
        <Box>
          <Typography variant="h6" color="var(--primary)">
            Title
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            1 Product Title
          </Typography>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        fontSize="3rem"
        color="var(--text-muted)"
      >
        {isOpen ? (
          <RemoveIcon fontSize="inherit" color="inherit" />
        ) : (
          <AddIcon fontSize="inherit" color="inherit" />
        )}
      </Box>
    </Box>
  );
};
export default CartHeader;
