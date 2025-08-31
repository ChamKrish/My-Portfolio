import React from 'react';
import { Box, Icon, Typography } from '@mui/material';

import Work from '../assets/work';
import { theme } from '../config/theme';

export type QualificationVariant = 'left' | 'right';

export interface IQualification {
  title: string;
  place: string;
  location?: string;
  start?: string;
  end?: string;
  description?: string;
}

interface IQualificationStyles {
  container: any;
}

interface IQualificationProps extends IQualification {
  variant?: QualificationVariant;
  styles?: IQualificationStyles;
}

const Qualification: React.FC<IQualificationProps> = (props) => {
  const styles = useStyles(props.variant ?? 'right');

  return (
    <Box sx={[styles.container, props.styles?.container]}>
      <Icon sx={styles.icon}><Work /></Icon>
      <Box sx={styles.details}>
        <Typography sx={styles.title}>{props.title}</Typography>
        <Box>
          <Typography sx={styles.place}>{props.place}</Typography>
          <Typography sx={styles.timeline}>
            {!!props.location ? `${props.location}, ` : ''}
            {props.start ?? ''}{!!props.start && !!props.end && ' - '}{props.end ?? ''}
          </Typography>
        </Box>
        {!!props.description && (
          <Box sx={styles.descriptionContainer}>
            {props.description?.split('\n').map((desc, index) => (
              <Typography key={index} sx={styles.description}>{desc}</Typography>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  )
};

const useStyles = (variant: QualificationVariant) => ({
  container: {
    display: 'flex',
    flex: 0.5,
    width: '50%',
    flexDirection: variant === 'right' ? 'row' : 'row-reverse',
    alignItems: 'center',
    paddingTop: theme.spacing(10),
    ...(variant === 'right'
      ? {
        alignSelf: 'flex-end',
        marginRight: theme.spacing(-12.4),
        paddingLeft: theme.spacing(12),
        borderLeft: `${theme.spacing(0.8)} solid ${theme.palette.primary.main}`
      } : {
        alignSelf: 'flex-start',
        marginLeft: theme.spacing(-12.4),
        paddingRight: theme.spacing(12),
        borderRight: `${theme.spacing(0.8)} solid ${theme.palette.primary.main}`
      }
    )
  },
  icon: {
    display: 'flex',
    position: 'absolute',
    height: theme.spacing(8),
    width: theme.spacing(8),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    backgroundColor: theme.palette.primary.main,
    ...(variant === 'right'
      ? { marginLeft: theme.spacing(-16.4) }
      : { marginRight: theme.spacing(-16.4) }
    )
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    textAlign: variant === 'right' ? 'start' : 'end'
  },
  title: {
    ...theme.typography.h3
  },
  place: {
    ...theme.typography.h4,
    color: theme.palette.text.primary
  },
  timeline: {
    ...theme.typography.caption,
    color: theme.palette.text.disabled
  },
  descriptionContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1)
  },
  description: {
    ...theme.typography.body2,
    color: theme.palette.text.secondary
  }
});

export default Qualification;