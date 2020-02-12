import React, { useState } from 'react';
import Slider from 'react-slick';
import { Typography } from 'antd';
import { isMobile } from 'react-device-detect';

const { Paragraph } = Typography;

const ImageCarousel = (props) => {
  const [showProjectTools, setShowProjectTools] = useState(false);

  const changeSlide = (current) => {
    setShowProjectTools(true);
    setTimeout( () => {
      setShowProjectTools(false);
    }, 6000);
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true,
    afterChange: current => {changeSlide(current)}
  };

  return (
    <React.Fragment>
      <div className="project-tools">
        <div className={`project-logo ${showProjectTools ? "show" : null}`}>
          Tools
          {props.logo.map((logo, index) => (
            <img src={logo} alt={`project-logo-${index}`} key={index}/>
          ))}
        </div>
      </div>
      <Slider className={`image-carousel ${isMobile ? "mobile" : null}`} {...settings}>
        {props.slides.map((slide, index) =>
          (
            <div key={index}>
              <img src={slide.image} alt={`project-${index}`} className={`${slide.mobileImage ? "mobile-image" : null}`}/>
              <div className="title">
                <span>{slide.title}</span>
              </div>
              <div className="description">
                <span>
                  <Paragraph ellipsis={{ rows: 3, expandable: true }}>
                    {slide.description}
                  </Paragraph>
                </span>
              </div>
            </div>
          )
        )}
      </Slider>
    </React.Fragment>
  );
}

export default ImageCarousel;
