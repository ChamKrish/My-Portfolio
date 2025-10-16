import React from 'react';
import { Box, Grid2, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import Project from '../components/project';
import { theme } from '../config/theme';

const Research: React.FC = () => {
  const styles = useStyles();
  const { t } = useTranslation();

  const data = [
    {
      title: 'Hope Speech Detection',
      description: 'Published research (EACL-2021) achieving F1-scores of 0.60 (Tamil) and 0.91 (English) on YouTube comments using ML/DL models (SVM, Logistic Regression, CNN+BiLSTM, MNB, ensembles).',
      demoUrl: 'https://ieeexplore.ieee.org/document/9850866',
      collaborators: ['Dinesh', 'Sudhanva', 'Nandhini']
    },
  ];

  return (
    <Box id="research" sx={styles.container}>
      <Typography sx={styles.heading}>{t('research')}</Typography>
      <Grid2 container spacing={theme.spacing(4)} sx={[styles.researchContainer, data.length === 1 && styles.singleResearchCardStyle]}>
        {data.map((research, index) => (
          <Grid2 size={{ xs: 12, sm: 6 }} sx={styles.researchCardContainer} key={index}>
            <Project title={research.title} description={research.description} collaborators={research.collaborators} demoUrl={research.demoUrl} />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  )
}

const useStyles = () => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: theme.spacing(0, 40),
    gap: theme.spacing(8),
  },
  heading: {
    ...theme.typography.h1,
  },
  researchContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    minWidth: theme.spacing(120)
  },
  singleResearchCardStyle: {
    justifyContent: 'center',
  },
  researchCardContainer: {
    display: 'flex',
    height: '-webkit-fill-available',
    minWidth: theme.spacing(120)
  }
});

export default Research;