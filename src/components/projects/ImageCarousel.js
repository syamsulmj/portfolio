import React, { useState } from 'react';
import Slider from 'react-slick';
// import { Icon } from 'antd';
import { getImagePath } from '../../lib/Helpers';
import { isMobile } from 'react-device-detect';

const ImageCarousel = (props) => {
  const [mobileLogoImage, setMobileLogoImage] = useState(props.slides[0].mobileImage);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true,
    afterChange: current => {
      setMobileLogoImage(props.slides[current].mobileImage);
    }
  };

  return (
    <React.Fragment>
      <img className={`logo-img ${mobileLogoImage ? "mobile-image" : null}`} src={props.logo}/>
      <Slider className={`image-carousel ${isMobile ? "mobile" : null}`} {...settings}>
        {props.slides.map(slide =>
          (
            <div>
              <img src={slide.image} className={`${slide.mobileImage ? "mobile-image" : null}`}/>
              <div className="title">
                <span>{slide.title}</span>
              </div>
              <div className="description">
                <span>{slide.description}</span>
              </div>
            </div>
          )
        )}
      </Slider>
    </React.Fragment>
  );
}

export default ImageCarousel;
