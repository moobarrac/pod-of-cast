import React, { useEffect, useState } from 'react';
import Sparkle from '../../assests/images/Sparkle.svg';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { feedbacks } from '../../utils/api';
import SingleFeedback from './SingleFeedback';
import './Feedback.css';

const Feedback = () => {
  const [slidesPerView, setSlidesPerView] = useState<number>(3.5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setSlidesPerView(3.5);
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(2.5);
      } else {
        setSlidesPerView(1.25);
      }
    };

    window.addEventListener('onload', handleResize);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  });

  return (
    <section className='feedback'>
      <div className='container'>
        <div className='feedback-content'>
          <div className='feedback-title'>
            <h3>What our listeners say</h3>
            <p>Their experience through our platform</p>
            <div className='feedback-icon'>
              <img src={Sparkle} alt="" />
            </div>
          </div>
          <div className='feedback-container'>
            <Swiper
              modules={[ Pagination, Navigation, A11y, Autoplay]}
              spaceBetween={20}
              slidesPerView={slidesPerView}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={true}
            >
              {
                feedbacks.map((feedback) => (
                  <div key={feedback.id}>
                  <SwiperSlide className='swiper-slide'>
                    <SingleFeedback
                      name={feedback.name}
                      avatar={feedback.avatar}
                      quote={feedback.quote}
                      source={feedback.source}
                    />
                  </SwiperSlide>
                  </div>
                ))
              }
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feedback