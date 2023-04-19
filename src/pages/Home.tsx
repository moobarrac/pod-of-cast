import React from 'react';
import Banner from '../components/Banner/Banner';
import Epidoses from '../components/Episodes/Epidoses';
import Feedback from '../components/Feedback/Feedback';
import Ideas from '../components/Ideas/Ideas';
import ImageSwiper from '../components/ImageSwiper/ImageSwiper';
import Membership from '../components/Membership/Membership';
import Sponsor from '../components/Sponsor/Sponsor';
import Supporters from '../components/Supporters/Supporters';

const Home = () => {
  return (
    <>
    <Banner title='Your daily' coloredTitle="podcasts"/>
    <ImageSwiper/>
    <Supporters/>
    <Ideas/>
    <Feedback/>
    <Membership/>
    <Epidoses/>
    <Sponsor/>
    </>
  )
}

export default Home;