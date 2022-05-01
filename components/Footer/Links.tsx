import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import * as React from 'react';
type LinkItemProps = {
  text: string;
  path: string;
};

const LinksItem: React.FunctionComponent<LinkItemProps> = ({ text, path }) => {
  const router = useRouter();
  return (
    <Box
      onClick={() => router.push(path)}
      sx={{
        color: 'var(--primary)',
        '&:hover': { color: 'var(--secondary)', cursor: 'pointer' },
      }}
      py="0.25rem"
      display="flex"
    >
      <ArrowRightIcon color="inherit" />
      {text}
    </Box>
  );
};

type LinksProps = {
  children?: JSX.Element | JSX.Element[];
};

const Links: React.FunctionComponent<LinksProps> = () => {
  return (
    <Box>
      <Typography variant="h5" color="var(--primary)">
        Customer Service
      </Typography>

      <Box py="0.5rem">
        <LinksItem text="Order History" path="/" />
        <LinksItem text="Account Settings" path="/" />
      </Box>
    </Box>
  );
};
export default Links;
