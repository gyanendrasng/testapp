import { Box, Grid, Typography } from '@mui/material';
import * as React from 'react';

type Props = {
  id: number;
  title: string;
  description: string;
  price: number;
  img: string;
};

const Item: React.FunctionComponent<Props> = ({
  id,
  title,
  description,
  price,
  img,
}) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Box>
        <Box>
          <Box
            component="img"
            src={img}
            width="150px"
            height="auto"
            alt={title}
          />
        </Box>
        <Box>
          <Typography>{title}</Typography>
          <Typography>{price}</Typography>
          <Typography>{description}</Typography>
        </Box>
      </Box>
    </Grid>
  );
};
export default Item;
