import { Box, Button as MuiButton } from '@mui/material';
import React from 'react'
import { theme } from '../config/theme';

// export enum ButtonVariant {
//   Light = 'Light',
//   Dark = 'Dark'
// }

export type ButtonVariant = 'light' | 'dark';

interface ButtonProps {
  title: string;
  variant: ButtonVariant;
}

const Button: React.FC<ButtonProps> = (props) => {
  const styles = useStyles(props.variant);
  return (
    <MuiButton sx={styles.container}>{props.title}</MuiButton>
  )
};

const useStyles = (variant: ButtonVariant) => ({
  container: {
    ...theme.typography.button,
    padding: theme.spacing(2, 4),
    borderRadius: theme.spacing(1.6),
    backgroundColor: variant === 'dark' ? theme.palette.primary.contrastText : theme.palette.primary.main,
    color: variant === 'dark' ? theme.palette.common.white : theme.palette.common.black
  }
});

export default Button;