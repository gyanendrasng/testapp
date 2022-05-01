import { Box, Typography } from '@mui/material';
import * as React from 'react';
import { useState } from 'react';
import useCart from '../../hooks/useCart';
import getTrancateString from '../lib/getTrancateString';
import Actions from './Actions';
import styles from './Product.module.css';
type Props = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
};
const Item: React.FunctionComponent<Props> = ({
  id,
  title,
  description,
  price,
  image,
  category,
}) => {
  const { addToCart, removeToCart, getQtyById } = useCart();
  const [count, setCount] = useState(0);

  const handleClickToIncrease = () => {
    setCount((value) => value + 1);
    addToCart({
      id,
      title,
      description,
      price,
      image,
      category,
    });
  };
  const handleClickToDecrease = () => {
    if (count !== 0) {
      setCount((value) => value - 1);
      removeToCart(id);
    }
  };
  return (
    <Box p="2rem" border="1px solid var(--border)" className={styles.item}>
      <Box position="absolute" right="0.5rem" top="0.5rem">
        <Actions
          count={getQtyById(id)}
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
          variant="subtitle2"
          component="span"
          color="var(--text-muted)"
          sx={{ fontWeight: 'bold' }}
        >
          Category : {category}
        </Typography>
        <Typography
          variant="h5"
          color="var(--primary)"
          sx={{ fontWeight: 'bold' }}
        >
          ${price}
        </Typography>
        <Typography component="span" color="var(--text-muted)">
          {getTrancateString(description, 60)}
        </Typography>
      </Box>
    </Box>
  );
};
export default Item;
