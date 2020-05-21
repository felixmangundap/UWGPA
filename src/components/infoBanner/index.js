import React from 'react';
import bannerGraphics from '../../images/banner-graphics.svg'

import './style.css';

const InfoBanner = () => {
  return (
    <div className='banner'>
      <img src={bannerGraphics} className='banner-graphics' alt='banner'/>
      <p className='banner-info'>Calculate your <span className='yellow'>University of Waterloo</span> GPA easily here!</p>
      <p className='banner-disclaimer'>*we don't keep any transcript, everything get's deleted once it's processed</p>
    </div>
  );
}

export default InfoBanner;