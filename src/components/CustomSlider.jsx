import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CustomSlider = ({ items }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Стилі для зображень у слайдері
  const imageStyles = {
    width: '100%',
    maxHeight: '180px',
  };

  return (
    <div className='slider-y'>
<Slider {...settings} className="custom-slider">
      {items.map(item => (
        <div key={item.id}>
          <img src={item.image} alt={item.caption} style={imageStyles} />
        </div>
      ))}
    </Slider>
    </div>
    
  );
};

export default CustomSlider;
