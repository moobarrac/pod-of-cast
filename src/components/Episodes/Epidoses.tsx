import React from 'react';
import { episodes } from '../../utils/api';
import './Epidoses.css';
import SingleEpisode from './SingleEpisode';

const Epidoses = () => {
  return (
    <section className='episodes'>
      <div className='container'>
        <div className='episodes-content'>
          <div className='episodes-title'>
            <h3>Recent Episodes</h3>
            <p>Available on your favorite platform</p>
          </div>
          <div className='episodes-container'>
            {
              episodes.map(episode => (
                <SingleEpisode episode={episode}/>
              ))
            }
          </div>
          <button className='btn btn-dark btn-shadow'>Browse all episodes</button>
        </div>
      </div>
    </section>
  )
}

export default Epidoses;