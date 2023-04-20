import React from 'react'
import GroupStar from '../../assests/images/GroupStar.svg'
import HeroSwipe from '../../assests/images/HeroShapeSwirl.svg'
import './Banner.css';

type BannerProps = {
  title: string,
  coloredTitle: string
}

const Banner = ({title, coloredTitle}:BannerProps) => {
  return (
    <div className='banner'>
      <div className='icon icon-1'>
        <img src={HeroSwipe} alt="" />
      </div>
      <div className='banner-content'>
        <h1><span>{title}</span><span className='text-orange'>{coloredTitle}</span></h1>
        <p>We cover all kind of categoreies and a weekly special guest</p>
        <button className='btn btn-dark btn-shadow btn-lg'>Subscribe</button>
      </div>
      <div className='icon icon-2'>
        <img src={GroupStar} alt="" />
      </div>
    </div>
  )
}

export default Banner