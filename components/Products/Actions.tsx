import {
  Add as AddIcon,
  Delete as DeleteIcon,
  Remove as RemoveIcon,
} from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import * as React from 'react';
import styles from './Product.module.css';
type Props = {
  count: number;
  handleClickToIncrease: () => void;
  handleClickToDecrease: () => void;
};

const Actions: React.FunctionComponent<Props> = ({
  count,
  handleClickToIncrease,
  handleClickToDecrease,
}) => {
  return (
    <Box className={styles.actions}>
      {count !== 0 && (
        <>
          <Box className={styles.iconBtn} onClick={handleClickToDecrease}>
            {count === 1 ? (
              <DeleteIcon color="inherit" />
            ) : (
              <RemoveIcon color="inherit" />
            )}
          </Box>
          <Box px="1rem">
            <Typography variant="h6" color="var(--primary)">
              {count}
            </Typography>
          </Box>
        </>
      )}

      <Box className={styles.iconBtn} onClick={handleClickToIncrease}>
        <AddIcon color="inherit" />
      </Box>
    </Box>
  );
};
export default Actions;
