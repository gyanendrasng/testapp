import { Box, Typography } from '@mui/material';
import * as React from 'react';
import { useState } from 'react';
import getTrancateString from '../lib/getTrancateString';
import Actions from './Actions';
import styles from './Product.module.css';
type Props = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
};
const Item: React.FunctionComponent<Props> = ({
  id,
  title,
  description,
  price,
  image,
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
    <Box p="2rem" border="1px solid var(--border)" className={styles.item}>
      <Box position="absolute" right="0.5rem" top="0.5rem">
        <Actions
          count={count}
          handleClickToIncrease={handleClickToIncrease}
          handleClickToDecrease={handleClickToDecrease}
        />
      </Box>

      <Box maxWidth="250px" p="1rem 3.5rem">
        <Box
          component="img"
          src={image}
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
          {getTrancateString(description, 60)}
        </Typography>
      </Box>
    </Box>
  );
};
export default Item;
