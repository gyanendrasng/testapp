import { Box, Typography } from '@mui/material';
import * as React from 'react';
import Brand from '../Common/Brand';
import Container from '../Container/Container';
import Links from './Links';
type Props = {
  children?: JSX.Element | JSX.Element[];
};

const Footer: React.FunctionComponent<Props> = () => {
  return (
    <Box>
      <Box bgcolor="var(--white)" p="2rem">
        <Container>
          <Box display="flex" flexWrap="wrap" justifyContent="space-between">
            <Box p="1rem">
              <Links />
            </Box>

            <Box>
              <Brand />
              <Typography variant="subtitle1">
                425 Tioga Ave, Kingston, PA 18704 (570) 234-2220
              </Typography>
              <Typography variant="subtitle1">
                info@kingstonkosher.com
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box bgcolor="var(--white-gray)" p="2rem">
        <Container>
          <Typography variant="h6" color="var(--primary)">
            Copyright © 2022 kingstonkosher.store
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};
export default Footer;
