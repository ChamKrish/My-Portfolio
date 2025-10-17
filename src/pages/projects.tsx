import React from 'react';
import { Box, Grid2, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import Project from '../components/project';
import { theme } from '../config/theme';

const Projects: React.FC = () => {
  const styles = useStyles();
  const { t } = useTranslation();

  const data = [
    {
      title: 'Language Detector',
      description: 'Built a Flask + TensorFlow web app with Bi-LSTM and CRF models in Keras/Python for word-level language identification on code-mixed social media data (English-Hindi, English-Telugu, English-Telugu-Hindi).',
      techStack: ['Python', 'Keras', 'Flask', 'Tensorflow', 'Machine Learning'],
      githubUrl: 'https://github.com/TeamQuintet/Language-Detector',
      demoUrl: 'https://github.com/ChamKrish/FDS-Language-Identification',
      collaborators: ['hi']
    },
    {
      title: 'Movie Booking System',
      description: 'Built a full-stack movie booking system using React Native, Go, and PostgreSQL.',
      techStack: ['React Native', 'Go Lang', 'PostgreSQL'],
    },
    {
      title: 'Music Recording Database System',
      description: 'Formulated and executed a database system to manage the data of a music recording company using PostgreSQL.',
      techStack: ['PostgreSQL', 'DBMS'],
      demoUrl: 'https://docs.google.com/document/d/1ewu-8RcQjeHdnIiz1vm5QQ82RRTDNKT7I5UKX6TfIW4/view'
    },
    {
      title: 'ReMind Me',
      description: 'Developed an Android application facilitating efficient task management through priority-based organization using Java and Firebase.',
      techStack: ['Java', 'Android', 'Firebase'],
      githubUrl: 'https://github.com/TeamQuintet/ReMindme',
    },
    {
      title: 'Health Care Chatbot',
      description: 'Crafted a health care bot leveraging the Apimedic API and IBM Watson Assistant to offer insights into medical issues and assist in diagnosis.',
      techStack: ['IBM Watson', 'Apimedic API'],
      demoUrl: 'https://sites.google.com/view/machealthcarechatbot/home',
    },
  ];

  return (
    <Box id="projects" sx={styles.container}>
      <Typography sx={styles.heading}>{t('projects')}</Typography>
      <Grid2 container spacing={theme.spacing(4)} sx={[styles.projectsContainer, data.length === 1 && styles.singleProjectStyle]}>
        {data.map((project, index) => (
          <Grid2 size={{ xs: 12, sm: 6 }} sx={styles.projectContainer} key={index}>
            <Project title={project.title} description={project.description} techStack={project.techStack} githubUrl={project.githubUrl} demoUrl={project.demoUrl} />
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
  projectsContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
  },
  singleProjectStyle: {
    justifyContent: 'center',
  },
  projectContainer: {
    display: 'flex',
  }
});

export default Projects;