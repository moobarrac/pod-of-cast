import React, { useEffect, useState } from 'react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Mind from '../../assests/images/mind.png';
import SelfCOnfidence from '../../assests/images/selfConfidence.png';
import WomenRight from '../../assests/images/womenRight.png';
import SocialLife from '../../assests/images/socialClass.png';
import Tesla from '../../assests/images/tesla.png';
import Covid from '../../assests/images/covid.png';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './ImageSwiper.css';
import { Link } from 'react-router-dom';

const ImageSwiper: React.FC = () => {
  const [slidesPerView, setSlidesPerView] = useState<number>(4.5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setSlidesPerView(4.5);
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
    <div className='swiper-container'>
      <Swiper
        modules={[ Pagination, Navigation, A11y, Autoplay]}
        spaceBetween={10}
        slidesPerView={slidesPerView}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
      >
        <SwiperSlide className='swiper-slide'>
          <Link to=''>
            <img src={Mind} alt=""/>
          </Link>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <Link to=''>
            <img src={SelfCOnfidence} alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <Link to=''>
            <img src={WomenRight} alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <Link to=''>
            <img src={SocialLife} alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <Link to=''>
            <img src={Tesla} alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <Link to=''>
            <img src={Covid} alt="" />
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ImageSwiper;
