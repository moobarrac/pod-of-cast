import React from 'react';

type SingleEpisodeProps = {
  episode: PodcastEpisode;
};

const SingleEpisode = ({episode}: SingleEpisodeProps) => {
  return (
    <div className='single-episode'>
      <div className='episode-info'>
        <div className='episode-image'>
          <img src={episode.image} alt="" />
        </div>
        <div className='episode-content'>
          <h6>Eps {episode.episode}</h6>
          <h5>{episode.title}</h5>
          <p>{episode.description}</p>
        </div>
      </div>
      <div className='episode-extra'>
        <div className='tags'>
          {
            episode.tags.map(tag => (
              <span>{tag}</span>
            ))
          }
        </div>
        <div className='hosts'>
          <p>Hosted by: </p>
          <img src={episode.host.img} alt="" />
        </div>
      </div>
    </div>
  )
}

export default SingleEpisode