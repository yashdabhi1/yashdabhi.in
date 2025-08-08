import React from 'react'
import Introduction from '../components/aboutme/Introduction'
import Workexperience from '../components/aboutme/Workexperience'
import SkillMarquee from '../components/aboutme/SkillMarquee'
import ProjectCarousel from '../components/aboutme/Projectcarousel'
import { Box } from '@mui/material'

 const Home = () => {
  return (
    <>
    <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
      </Box>
       <Introduction/>
       <Workexperience/>
       <SkillMarquee/>
       <ProjectCarousel/>
    </>
  )
}

export default Home
