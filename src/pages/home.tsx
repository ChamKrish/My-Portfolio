import React from 'react'
import { Box } from '@mui/material'

import Header from '../components/header'
import { theme } from '../config/theme'
import About from './about'
import Experience from './experience'
import Profile from './profile'
import Projects from './projects'
import Research from './research'

const Home: React.FC = () => {
  const styles = useStyles();
  return (
    <Box sx={styles.container}>
      <Header />
      <Profile />
      <About />
      <Experience />
      <Projects />
      <Research />
    </Box>
  )
}

const useStyles = () => ({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    gap: theme.spacing(20),
    marginBottom: theme.spacing(30),
    alignItems: 'center',
  }
})

export default Home