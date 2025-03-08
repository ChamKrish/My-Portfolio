import React from 'react'
import Header from '../components/header'
import Profile from './profile'
import { Box } from '@mui/material'

const Home: React.FC = () => {
  const styles = useStyles();
  return (
    <Box sx={styles.container}>
      <Header />
      <Profile />
    </Box>
  )
}

const useStyles = () => ({
  container: {
    // display: 'flex',
    // flexDirection: 'column',
    // // justfiyContent: 'center',
    // // alignItems: 'center'
  }
})

export default Home