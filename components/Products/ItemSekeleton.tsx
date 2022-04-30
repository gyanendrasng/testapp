import { Box } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import * as React from 'react';
import Actions from './Actions';

const ItemSkeleton: React.FunctionComponent = () => {
  return (
    <Box p="2rem" border="1px solid var(--border)" position="relative">
      <Box position="absolute" right="0.5rem" top="0.5rem">
        <Actions
          count={0}
          handleClickToIncrease={() => false}
          handleClickToDecrease={() => false}
        />
      </Box>
      <Box height="1.5rem" />

      <Skeleton variant="rectangular" width="100%" height={100} />
      <Box height="1rem" />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
    </Box>
  );
};
export default ItemSkeleton;
