import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import Qualification, { IQualification } from '../components/qualification';
import { theme } from '../config/theme';

interface IExperience {
  title: string;
  qualifications: IQualification[];
}

const Experience: React.FC = () => {
  const styles = useStyles();
  const { t } = useTranslation();

  const data = [
    {
      title: 'Work Experience',
      qualifications: [
        {
          title: 'Senior Software Engineer 1',
          place: 'Infra.Market',
          location: 'Bengaluru',
          start: 'Apr 2024',
          end: 'Present',
          description: 'Spearheaded end-to-end development of a cross-platform React Native application used daily by internal teams across 3+ business units, including architecture, sprint planning, testing, and deployment, ensuring <1% production bug rate.\nMentored 3 junior developers and conducted 100+ code reviews, reducing review defects by 35% and improving code quality across the team.'
        },
        {
          title: 'Software Engineer 2',
          place: 'Infra.Market',
          location: 'Bengaluru',
          start: 'Apr 2023',
          end: 'Mar 2024',
          description: 'Built and maintained a Node.js BFF layer integrating backend services via gRPC/HTTP, enhancing FE-BE communication for 5+ modules, reducing API response time by 15%, and ensuring 75%+ unit test coverage.\nMaintained and enhanced backend payment service processing ₹5M+ monthly transactions, fixing bugs, releasing patches, and adding features to ensure availability and reliability.'
        },
        {
          title: 'Software Engineer 1',
          place: 'Infra.Market',
          location: 'Bengaluru',
          start: 'Jul 2022',
          end: 'Mar 2023',
          description: 'Implemented micro-frontend architecture (Repack), reducing app load times by 30% and improving development efficiency by 15%.'
        },
        {
          title: 'Software Engineer Intern',
          place: 'Infra.Market',
          location: 'Bengaluru',
          start: 'Jan 2022',
          end: 'Jun 2022',
          description: 'Designed and developed reusable UI components (filters, category selection, listing templates with pagination & search), adopted across multiple apps, reducing feature delivery time by 20%.'
        }
      ]
    },
    {
      title: 'Education',
      qualifications: [
        {
          title: 'B.Tech in Computer Science & Engineering',
          place: 'Amrita School of Engineering',
          location: 'Kollam',
          start: '2018',
          end: '2022',
          description: 'Graduated with 8.75 CGPA\nMerit Scholarship recipient\nActive Member of Coding Club'
        },
        {
          title: 'Senior Secondary – MPC',
          place: 'Sri Chaitanya Junior College',
          start: '2016',
          end: '2018',
          description: 'Achieved 96.5%'
        },
        {
          title: 'Secondary School Education',
          place: 'Nagarjuna Public School',
          end: '2016',
          description: 'Secured 9.5 CGPA\nAwarded for Academic Excellence'
        }
      ]
    }
  ] as IExperience[];

  const renderExperience = (index: number, experience: IExperience) => (
    <Box key={index} sx={styles.experience}>
      <Typography sx={styles.subHeading}>{experience.title}</Typography>
      {experience.qualifications.map((qualification, id) => (
        <Qualification
          variant={id % 2 === 0 ? 'left' : 'right'}
          styles={{
            container: id === experience.qualifications.length - 1
              ? styles.qualificationContainer
              : {}
          }}
          {...qualification} 
        />
      ))}
      {index === data.length - 1 && <Box sx={styles.dot} />}
    </Box>
  );

  return (
    <Box id="experience" sx={styles.container}>
      <Typography sx={styles.heading}>{t('experience')}</Typography>
      <Box>{data.map((exp, index) => renderExperience(index, exp))}</Box>
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
  experience: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subHeading: {
    ...theme.typography.h3,
    padding: theme.spacing(1, 2),
    borderRadius: theme.spacing(2),
    backgroundColor: theme.palette.primary.main
  },
  qualificationContainer: {
    paddingBottom: theme.spacing(10)
  },
  dot: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    borderRadius: '100%',
    backgroundColor: theme.palette.primary.main,
  }
});

export default Experience;