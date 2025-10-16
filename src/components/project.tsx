import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';

import { theme } from '../config/theme';
import Github from '../assets/svg/github';
import Link from '../assets/svg/link';
import { useTranslation } from 'react-i18next';
import { openUrl } from '../config/utils';

export interface IProject {
  title: string;
  description: string;
  githubUrl?: string;
  demoUrl?: string;
  techStack?: string[];
  collaborators?: string[];
}

interface IProjectStyles {
  container: any;
}

interface IProjectProps extends IProject {
  styles?: IProjectStyles;
}

const Project: React.FC<IProjectProps> = (props) => {
  const styles = useStyles();
  const { t } = useTranslation();

  const renderInfo = (title: string, info: string[]) => (
    <Box sx={styles.info}>
      <Typography sx={styles.infoTitle}>{title}</Typography>
      <Typography noWrap sx={styles.infoText as any}>{info.join(', ')}</Typography>
    </Box>
  )

  return (
    <Box sx={[styles.container, props.styles?.container]}>
      <Box sx={styles.titleContainer}>
        <Typography sx={styles.title}>{props.title}</Typography>
        {!!props.githubUrl && <IconButton onClick={() => openUrl(props.githubUrl)} sx={styles.icon}><Github color={theme.palette.primary.dark} /></IconButton>}
        {!!props.demoUrl && <IconButton onClick={() => openUrl(props.demoUrl)} sx={styles.icon}><Link color={theme.palette.primary.dark} /></IconButton>}
      </Box>
      <Box sx={styles.descriptionContainer}>
        <Typography sx={styles.description as any}>{props.description}</Typography>
      </Box>
      {props.techStack?.length && renderInfo(t('techStackLabel'), props.techStack)}
      {props.collaborators?.length && renderInfo(t('collaboratorsLabel'), props.collaborators)}
    </Box>
  )
};

const useStyles = () => ({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    width: '80%',
    minHeight: theme.spacing(40),
    padding: theme.spacing(4),
    gap: theme.spacing(2),
    borderRadius: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    ...theme.typography.h4,
    flex: 1,
  },
  icon: {
    height: theme.spacing(5),
    width: theme.spacing(5),
    padding: 0,
    marginLeft: theme.spacing(4),
  },
  descriptionContainer: {
    flex: 1
  },
  description: {
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    WebkitLineClamp: 4,
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: theme.spacing(4),
  },
  infoTitle: {
    ...theme.typography.h5,
    color: theme.palette.text.primary,
    whiteSpace: 'nowrap'
  },
  infoText: {
    ...theme.typography.caption,
    color: theme.palette.text.secondary,
  }
});

export default Project;