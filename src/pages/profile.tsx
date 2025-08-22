import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import Button from '../components/button';
import { theme } from '../config/theme';

const Profile: React.FC = () => {
  const styles = useStyles();
  const { t } = useTranslation();

  const data = {
    title: 'Chamanth Krishna Yarlagadda',
    subTitle: 'Senior Software Enginner I',
    description: 'Full stack developer building scalable mobile & web applications with modern tech'
  }

  return (
    <Box sx={styles.container}> 
      <Box sx={styles.detailsContainer}>
        <Typography sx={styles.heading}>{t('hiThere')}</Typography>
        <Typography sx={styles.title}>{data.title}</Typography>
        <Typography sx={styles.subTitle}>{data.subTitle}</Typography>
        <Typography sx={styles.description}>{data.description}</Typography>
        <Box sx={styles.buttons}>
          <Button title={t('downloadResume')} variant='dark' />
          <Button title={t('seeMyProjects')} variant='light' />
        </Box>
      </Box>
      <Box sx={styles.image} />
    </Box>
  )
};

const useStyles = () => ({
  container: {
    display: "flex",
    flexDirection: "row",
    margin: theme.spacing(20, 25),
    alignItems: "center",
    justifySelf: "center"
  },
  detailsContainer: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    padding: theme.spacing(2)
  },
  heading: {
    ...theme.typography.h2,
    color: theme.palette.text.secondary
  },
  title: {
    ...theme.typography.h1,
    color: theme.palette.common.black
  },
  subTitle: {
    ...theme.typography.h3,
    marginTop: theme.spacing(1),
    color: theme.palette.text.primary
  },
  description: {
    ...theme.typography.body2,
    marginTop: theme.spacing(3),
    color: theme.palette.text.secondary
  },
  buttons: {
    display: "flex",
    marginTop: theme.spacing(6),
    gap: theme.spacing(8)
  },
  image: {
    width: 500,
    height: 500,
    backgroundColor: theme.palette.primary.main
  }
});

export default Profile;