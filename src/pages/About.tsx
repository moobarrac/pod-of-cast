import React from 'react'
import Banner from '../components/Banner/Banner'
import Listeners from '../components/Listeners/Listeners'
import Contact from '../components/Contact/Contact'

const About = () => {
  return (
    <>
      <Banner title='About' coloredTitle="Pod of Cast"/>
      <Listeners/>
      <Contact/>
    </>
  )
}

export default About