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
          description: 'Achieved <3% production bug rate by spearheading end-to-end development of a cross-platform React Native app used daily by internal teams across 3+ business units, covering architecture, sprint planning, testing, and deployment.\nOptimized API response times by 25% while ensuring 75%+ unit test coverage by building and maintaining a Node.js Backend-for-Frontend (BFF) layer aggregating 5+ backend services via gRPC/HTTP, improving FE-BE efficiency.\nCut initial setup effort by 80% and reduced time-to-market by ~2 weeks per app by creating a scalable React Native boilerplate, adopted across multiple teams to standardize project structure and accelerate development.'
        },
        {
          title: 'Software Engineer 2',
          place: 'Infra.Market',
          location: 'Bengaluru',
          start: 'Apr 2023',
          end: 'Mar 2024',
          description: 'Improved customer support agent efficiency by 20% by leading Ozonetel integration and collaborating with product, ops, and vendor teams to migrate 100% of operations to in-house web (iframe) and mobile (API) solutions.\nWon IMHAX 2023 (Infra Market Hackathon) by developing an AI-powered system using LLMs + Google Cloud ML APIs to automate pre-sales lead capture from audio transcripts, reducing manual processing time by 70%.\nMaintained and enhanced backend payment service processing ₹5M+ monthly transactions by optimizing transaction workflows and adding EMI interest feature for payments and refunds, ensuring high availability and reliability.\nMentored 3 junior developers and conducted 100+ code reviews, reducing post-review bugs by 35% and improving code quality across the team.'
        },
        {
          title: 'Software Engineer 1',
          place: 'Infra.Market',
          location: 'Bengaluru',
          start: 'Jul 2022',
          end: 'Mar 2023',
          description: 'Reduced app size by 30% and boosted development efficiency by 15% by implementing micro-frontend architecture (Repack), enabling modular code updates, faster deployments, and independent team workflows.\nImproved feature delivery speed by 20% by designing reusable UI components (filters, category selection, listing templates with pagination & search), adopted across multiple apps.'
        },
        {
          title: 'Software Engineer Intern',
          place: 'Infra.Market',
          location: 'Bengaluru',
          start: 'Jan 2022',
          end: 'Jun 2022',
          description: 'Increased test coverage by 15% through unit and integration testing (Jest), enhancing code reliability.\nImproved release stability by resolving 10+ production bugs in a newly onboarded project, reducing customer-reported issues by 20%.'
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