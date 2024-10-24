import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import LinkComponent from '../LinkComponent/LinkComponent';

interface ServiceCardCarouselProps {
  images: string[];
  title: string;
  description: string;
  linkText: string;
  buttonText: string;
  style?: string;
  imageRightDirection?: boolean;
  imageBottomDirection?: boolean;
}

const ServiceCardCarouselComponent: React.FC<ServiceCardCarouselProps> = ({
  images,
  title,
  description,
  linkText,
  buttonText,
  style,
  imageRightDirection,
  imageBottomDirection
}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div
      className={`flex items-center flex-col md:flex-row ${style} ${
        imageRightDirection ? 'md:flex-row-reverse' : ''
      } ${imageBottomDirection ? 'flex-col-reverse' : ''}`}
    >
      {/* Image Carousel */}
      <div className="md:w-1/2">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                className="w-full h-full object-cover"
                src={image}
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center p-5 m-5 md:m-0 w-full md:w-1/2 text-center">
        <h2 className="mb-[20px] uppercase text-[28px] md:text-[36px] xl:text-[48px]">
          {title}
        </h2>
        <h3 className="mb-[20px] w-[400px] text-[18px] text-[#7a7a7a] md:text-[22.4px] uppercase">
          {description}
        </h3>
        <div className="flex flex-col items-center">
          <LinkComponent text={linkText} />
          <ButtonComponent
            style="text-white bg-[#9abd6b] hover:bg-[#b1b968] hover:opacity-[53%]"
            text={buttonText}
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceCardCarouselComponent;
