import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { theme } from '../config/theme';
import ReactIcon from '../assets/reactIcon';
import Redux from '../assets/redux';
import Javascript from '../assets/javascript';

const About: React.FC = () => {
  const styles = useStyles();
  const { t } = useTranslation();

  const data = {
    details: "\tI’m a Software Developer with 3+ years of experience in React Native, React, and full-stack development, passionate about building scalable, high-performance applications. I’ve worked extensively with Node.js, Go, PostgreSQL, and gRPC, bridging the gap between frontend and backend to deliver seamless user experiences. \n\n\tIn addition to coding, I’ve had the opportunity to mentor junior developers, share best practices, and contribute to creating collaborative team cultures. I believe great software is the result of not just good code, but also good communication and teamwork.\n\n\tI also have a background in machine learning research, which adds a layer of curiosity and innovation to my work. I’m passionate about exploring emerging technologies and finding ways to turn ideas into impactful, real-world solutions."
  };

  return (
    <Box sx={styles.container}>
      <Typography sx={styles.heading}>{t('aboutMe')}</Typography>
      <Typography sx={styles.details} whiteSpace="pre-wrap">{data.details}</Typography>
      <Box sx={styles.icons}>
        <ReactIcon />
        <Redux />
        <Javascript />
      </Box>
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
    ...theme.typography.h1,
  },
  details: {
    ...theme.typography.body1,
    color: theme.palette.text.primary
  },
  icons: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'flex-end',
    gap: theme.spacing(8)
  }
});

export default About;