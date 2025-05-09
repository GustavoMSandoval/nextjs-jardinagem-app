/* eslint-disable react/style-prop-object */
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ButtonComponent from '../elementsComponents/ButtonComponent/ButtonComponent';
import LinkComponent from '../elementsComponents/LinkComponent/LinkComponent';

export default function LandingPageClients() {
  const clientInfoFirstRow = [
    { image: "https://jardinsecia.com.br/wp-content/uploads/2023/05/Group-1-5.png", text: "" },
    { image: "https://jardinsecia.com.br/wp-content/uploads/2023/05/image-3.png", text: "" },
    { image: "https://jardinsecia.com.br/wp-content/uploads/2023/05/image-4-1.png", text: "" }
  ];

  const clientInfoSecondRow = [
    { image: "https://jardinsecia.com.br/wp-content/uploads/2023/05/Group-2-1.png", text: "" },
    { image: "https://jardinsecia.com.br/wp-content/uploads/2023/05/Group-1-4.png", text: "" },
    { image: "https://jardinsecia.com.br/wp-content/uploads/2023/05/image-2-1.png", text: "" }
  ];

  // Carousel settings
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 images per row
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-start p-20 bg-[#e3edd0] mt-[300px] sm:mt-[600px] md:mt-[860px] xl:mt-[28px]">
      
      {/* Text on the left (or top in responsive) */}
      <div className="flex flex-col items-start w-full md:w-1/3 mb-10 md:mb-0">
        <h2 className="text-left text-[48px] my-10  border-b-2 border-black uppercase ">nossos clientes</h2>
        <p className="text-left text-[#7f7f7f]">
          Aqui estão alguns dos nossos parceiros de negócios que confiam em nossos serviços.
          Trabalhamos juntos para alcançar os melhores resultados.
        </p>
        <ButtonComponent style="bg-white mx-0" text="contatos"/>
        <LinkComponent text="ver mais"/>
      </div>

      {/* Carousel on the right (or below in responsive) */}
      <div className="w-full md:w-2/3">
        {/* First row */}
        <div className="mb-10">
          <Slider {...settings}>
            {clientInfoFirstRow.map((item, index) => (
              <div key={index} className="client-slide">
                <img
                  src={item.image}
                  alt={`Client ${index + 1}`}
                  className="w-full mx-auto h-auto opacity-35 grayscale transition duration-500 ease-in-out hover:opacity-100 hover:grayscale-0"
                  style={{ maxWidth: '150px' }}
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Second row */}
        <div>
          <Slider {...settings}>
            {clientInfoSecondRow.map((item, index) => (
              <div key={index} className="client-slide">
                <img
                  src={item.image}
                  alt={`Client ${index + 1}`}
                  className="w-full mx-auto h-auto opacity-35 grayscale transition duration-500 ease-in-out hover:opacity-100 hover:grayscale-0"
                  style={{ maxWidth: '150px' }}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
