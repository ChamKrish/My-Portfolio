import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import ProfileImage from '../assets/images/Profile.jpg';
import Button from '../components/button';
import { theme } from '../config/theme';
import { openGoogleDriveDocument } from '../config/utils';
import { resumeFileId } from '../constants/Common';

const Profile: React.FC = () => {
  const styles = useStyles();
  const { t } = useTranslation();

  const data = {
    title: 'Chamanth Krishna Yarlagadda',
    subTitle: 'Senior Software Enginner I',
    description: 'Full stack developer building scalable mobile & web applications with modern tech'
  }
  
  return (
    <Box id="home" sx={styles.container}> 
      <Box sx={styles.detailsContainer}>
        <Typography sx={styles.heading}>{t('hiThere')}</Typography>
        <Typography sx={styles.title}>{data.title}</Typography>
        <Typography sx={styles.subTitle}>{data.subTitle}</Typography>
        <Typography sx={styles.description}>{data.description}</Typography>
        <Box sx={styles.buttons}>
          <Button title={t('viewResume')} variant='dark' onClick={() => openGoogleDriveDocument(resumeFileId)} />
          {/* <Button title={t('seeMyProjects')} variant='light' onClick={() => scrollToElement('coming-soon')} /> */}
        </Box>
      </Box>
      <Box 
        component="img"
        src={ProfileImage}
        alt="Profile"
        sx={styles.image}
      />
    </Box>
  )
};

const useStyles = () => ({
  container: {
    display: "flex",
    flexDirection: "row",
    margin: theme.spacing(0, 10),
    paddingTop: theme.spacing(5),
    alignItems: "center",
    justifySelf: "center",
    gap: theme.spacing(20),
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
    width: 450,
    height: 500,
    objectFit: 'cover',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
  }
});

export default Profile;