import React from 'react';

import { SlideShowContainer } from './style';

import Slider, { Settings } from 'react-slick';

const SlideShow = () => {
  const sliderSettings: Settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
  };

  return (
    <SlideShowContainer>
      <Slider {...sliderSettings}>
        <div className="slideshow-item-container">
          <img
            src={require('~/public/images/placeholders/slide.jpg')}
            alt="Qualidade e ergonomia para Área da Saúde"
            title="Qualidade e ergonomia para Área da Saúde"
            width="1919"
            height="684"
          />
        </div>

        <div className="slideshow-item-container">
          <img
            src={require('~/public/images/placeholders/slide.jpg')}
            alt="Qualidade e ergonomia para Área da Saúde"
            title="Qualidade e ergonomia para Área da Saúde"
            width="1919"
            height="684"
          />
        </div>
      </Slider>
    </SlideShowContainer>
  );
};

export { SlideShow };
