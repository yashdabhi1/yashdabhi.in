import React from 'react'
import Introduction from '../components/aboutme/Introduction'
import Workexperience from '../components/aboutme/Workexperience'
import SkillMarquee from '../components/aboutme/SkillMarquee'
import ProjectCarousel from '../components/aboutme/Projectcarousel'


const Home = () => {
  return (
    <div>
       <Introduction/>
       <Workexperience/>
       <SkillMarquee/>
       <ProjectCarousel/>
    </div>
  )
}

export default Home
