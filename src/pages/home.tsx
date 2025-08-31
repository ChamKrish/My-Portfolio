import React from 'react'
import { Box } from '@mui/material'

import Header from '../components/header'
import { theme } from '../config/theme'
import About from './about'
import ComingSoon from './comingSoon'
import Experience from './experience'
import Profile from './profile'

const Home: React.FC = () => {
  const styles = useStyles();
  return (
    <Box sx={styles.container}>
      <Header />
      <Profile />
      <About />
      <Experience />
      <ComingSoon />
    </Box>
  )
}

const useStyles = () => ({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    gap: theme.spacing(2),
  }
})

export default Home