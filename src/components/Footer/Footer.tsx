import React from 'react';
import Home from '../../assests/images/Home.png';
import Play from '../../assests/images/play.png';
import Logo from '../../assests/images/logo.png';
import Twitter from '../../assests/images/twitter.svg';
import Tiktok from '../../assests/images/tiktok.svg';
import Instagram from '../../assests/images/instagram.svg';
import Spotify from '../../assests/images/Spotify.svg';
import Youtube from '../../assests/images/Youtube.svg';
import Google from '../../assests/images/Google.svg';
import './Footer.css'


const Footer = () => {
  return (
    <footer className='footer'>
      <section className='app-store'>
        <div className='trending-image'>
          <img src={Home} alt="" />
        </div>
        <div className='app-content'>
          <button className='beta'>BETA</button>
          <h3>Available now <br/><span className='text-orange'>Pod of Cast App</span></h3>
          <p>We just launched our podcast app</p>
          <button className='btn btn-dark btn-shadow btn-lg download'>DOWNLOAD</button>
        </div>
        <div className='play-image'>
          <img src={Play} alt="" />
        </div>
      </section>
        
      <section className='links-section'>
        <div className='container'>
          <div className='links-content'>
            <div className='logos'>
              <img src={Logo} alt="" />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, esse.</p>
              <div className='social-icon'>
                <img src={Twitter} alt="" />
                <img src={Instagram} alt="" />
                <img src={Tiktok} alt="" />
              </div>
            </div>
            <ul className='links'>
              <li>About</li>
              <li className='text-orange'>Episodes</li>
              <li>Testimonials</li>
              <li className='text-orange'>Pricing</li>
              <li>Features</li>
              <li className='text-orange'>Blog</li>
            </ul>
            <div className='platforms'>
              <div className="platform-content">
                <p>Listen to episodes on your fav TV</p>
                <div className="platform-container">
                  <img src={Spotify} alt="" />
                  <img src={Google} alt="" />
                  <img src={Youtube} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="footnote">
            <p>©2022. All Rights Reserved. <span className='text-orange'>Pod of Cast</span></p>
            <div className='terms'>
              <p>Terms.</p>
              <p>Privacy</p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer