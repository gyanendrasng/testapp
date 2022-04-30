import { Box } from '@mui/material';
import Image from 'next/image';
import * as React from 'react';
import LogoSrc from '../../assets/logo.svg';

const Brand: React.FunctionComponent<any> = () => {
  return (
    <Box>
      <Image src={LogoSrc} width="100px" height="80px" alt="Logo" />
    </Box>
  );
};
export default Brand;
