import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CoordinatorCarousel = ({ coordinators }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {coordinators.map((coordinator, index) => (
        <div key={index}>
          <img src={coordinator.imgSrc} alt={coordinator.name} />
          <h3>{coordinator.name}</h3>
          <p>{coordinator.roles.join(', ')}</p>
        </div>
      ))}
    </Slider>
  );
};

export default CoordinatorCarousel;
