import React from 'react';
import { Box, Typography } from '@mui/material';

import { theme } from '../config/theme';

const ComingSoon: React.FC = () => {
  const styles = useStyles();

  return (
    <Box id="coming-soon" sx={styles.container}>
      <Typography sx={styles.heading}>Coming Soon ...</Typography>
    </Box>
  )
}

const useStyles = () => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: theme.spacing(20, 45),
    gap: theme.spacing(4),
  },
  heading: {
    ...theme.typography.h3,
  },
});

export default ComingSoon;