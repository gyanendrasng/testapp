import { Box, Grid, Typography } from '@mui/material';
import * as React from 'react';
import { useState } from 'react';
import Actions from './Actions';
import styles from './Product.module.css';
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
  const [count, setCount] = useState(0);
  const handleClickToIncrease = () => {
    setCount((value) => value + 1);
  };
  const handleClickToDecrease = () => {
    if (count !== 0) {
      setCount((value) => value - 1);
    }
  };
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Box p="2rem" border="1px solid var(--border)" className={styles.item}>
        <Actions
          count={count}
          handleClickToIncrease={handleClickToIncrease}
          handleClickToDecrease={handleClickToDecrease}
        />
        <Box p="1rem 3.5rem">
          <Box
            component="img"
            src={img}
            width="100%"
            height="auto"
            alt={title}
          />
        </Box>
        <Box p="1rem">
          <Typography variant="h6" color="var(--primary)">
            {title}
          </Typography>
          <Typography
            variant="h5"
            color="var(--primary)"
            sx={{ fontWeight: 'bold' }}
          >
            {price}{' '}
            <Typography
              variant="subtitle1"
              component="span"
              color="var(--text-muted)"
              sx={{ fontWeight: 'bold' }}
            >
              /lib
            </Typography>
          </Typography>
          <Typography component="span" color="var(--text-muted)">
            {description}
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};
export default Item;
