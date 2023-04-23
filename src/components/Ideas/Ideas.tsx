import React from 'react';
import Illustration1 from '../../assests/images/Illustration-1.svg'
import Illustration2 from '../../assests/images/Illustration-2.svg'
import Spring from '../../assests/images/spring.svg';
import Vector from '../../assests/images/Star1.svg';
import { BsFillChatQuoteFill } from 'react-icons/bs';
import './Ideas.css';


const Ideas = () => {
  return (
    <div className='ideas'>
      <div className='container'>
        <div className='ideas-content'>
          <h3>Talk. Listen. Get inspired by every minute of it.</h3>
          <div className='idea'>
            <div className='illustration'>
              <div className='illustration-img'>
                <img src={Illustration1} alt="" />
              </div>
              <p className='illustration-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero vel iure eum quod nesciunt obcaecati?</p>
            </div>
            <div className='illustration'>
              <div className='illustration-img'>
                <img src={Illustration2} alt="" />
              </div>
              <p className='illustration-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero vel iure eum quod nesciunt obcaecati?</p>
            </div>
          </div>

          <div className='quote'>
            <h4><BsFillChatQuoteFill/></h4>
            <h2>One of the best daily podcasts that covers every topic on Spotify.</h2>
            <div className='person'>
              <p>John Doe</p>
              <h6 className='role'>
                Frontend Engineer
              </h6>
            </div>
            <img src={Spring} alt="" className='idea-icon idea-icon-1'/>
            <img src={Vector} alt="" className='idea-icon idea-icon-2'/>
          </div>

          
        </div>
      </div>
    </div>
  )
}

export default Ideas