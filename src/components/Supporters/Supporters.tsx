import React from 'react';
import Spotify from '../../assests/images/Spotify.svg';
import Youtube from '../../assests/images/Youtube.svg';
import Google from '../../assests/images/Google.svg';
import './Supporters.css';

const Supporters = () => {
  return (
    <div className='supporters'>
      <div className='container supporter-content'>
        <h4>Supported By:</h4>
        <img src={Spotify} alt="" />
        <img src={Google} alt="" />
        <img src={Youtube} alt="" />
      </div>
    </div>
  )
}

export default Supporters