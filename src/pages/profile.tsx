import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Button, { ButtonVariant } from '../components/button';
import { theme } from '../config/theme';

const Profile: React.FC = () => {
  const styles = useStyles();
  const { t } = useTranslation();

  const data = {
    title: 'Chamanth Krishna Yarlagadda',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }

  return (
    <Box sx={styles.container}> 
      <Box sx={styles.detailsContainer}>
        <Typography sx={styles.heading}>{t('hiThere')}</Typography>
        <Typography sx={styles.title}>{data.title}</Typography>
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
    width: 1400,
    padding: theme.spacing(10, 0),
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
    color: theme.palette.primary.dark
  },
  title: {
    ...theme.typography.h1,
    color: theme.palette.common.black
  },
  description: {
    ...theme.typography.body1,
    marginTop: theme.spacing(6),
    color: theme.palette.primary.dark
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