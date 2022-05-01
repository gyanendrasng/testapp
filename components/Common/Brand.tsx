import { Box } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import * as React from 'react';
import LogoSrc from '../../assets/logo.svg';

const Brand: React.FunctionComponent<any> = () => {
  const router = useRouter();

  return (
    <Box sx={{ cursor: 'pointer' }} onClick={() => router.push('/')}>
      <Image src={LogoSrc} width="100px" height="80px" alt="Logo" />
    </Box>
  );
};
export default Brand;
