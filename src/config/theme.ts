import { ThemeOptions } from "@mui/material";

export const theme: ThemeOptions = {
  palette: {
    mode: 'light',
    common: {
      black: '#000',
      white: '#fff',
    },
    text: {
      primary: '#373737',
      secondary: '#5f5f5f',
      disabled: '#b3b3b3',
    }, 
    primary: {
      light: '#f5f5f5',
      main: '#efefef',
      dark: '#5f5f5f',
      contrastText: '#313131',
    },
  },
  spacing: 5,
  typography: {
    h1: {
      fontFamily: 'Inter',
      fontSize: 48,
      fontWeight: 700,
    },
    h2: {
      fontFamily: 'Inter',
      fontSize: 40,
      fontWeight: 600,
    },
    h3: {
      fontFamily: 'Inter',
      fontSize: 32,
      fontWeight: 600,
    },
    h4: {
      fontFamily: 'Inter',
      fontSize: 24,
      fontWeight: 500,
    },
    h5: {
      fontFamily: 'Inter',
      fontSize: 20,
      fontWeight: 500,
    },
    button: {
      fontFamily: 'Inter',
      fontSize: 16,
      fontWeight: 500,
    },
    body1: {
      fontFamily: 'Inter',
      fontSize: 24,
    },
    body2: {
      fontFamily: 'Inter',
      fontSize: 20,
    },
    caption: {
      fontFamily: 'Inter',
      fontSize: 16,
    },
  },
};