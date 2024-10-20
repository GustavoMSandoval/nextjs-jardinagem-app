import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function LandingPageClients() {
  const clientInfo = [
    { image: "https://jardinsecia.com.br/wp-content/uploads/2023/05/Group-1-5.png", text: "" },
    { image: "https://jardinsecia.com.br/wp-content/uploads/2023/05/image-3.png", text: "" },
    { image: "https://jardinsecia.com.br/wp-content/uploads/2023/05/image-4-1.png", text: "" },
    { image: "https://jardinsecia.com.br/wp-content/uploads/2023/05/Group-2-1.png", text: "" },
    { image: "https://jardinsecia.com.br/wp-content/uploads/2023/05/Group-1-4.png", text: "" },
    { image: "https://jardinsecia.com.br/wp-content/uploads/2023/05/image-2-1.png", text: "" }
  ];

  // Settings for the carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
    <div className="flex justify-center p-20 bg-[#e3edd0]">
      
      <div className="w-1/2 overflow-hidden ">
      <h2 className='text-center text-[48px] my-20 uppercase'>clientes</h2>
        <Slider {...settings}>
          {clientInfo.map((item, index) => (
            <div key={index} className="client-slide">
              <img
                src={item.image}
                alt={`Client ${index + 1}`}
                className="w-full h-auto mx-auto" // Ensuring images take up full width
                style={{ maxWidth: '150px' }} // Optional: Adjust image max width
              />
              {item.text && <p>{item.text}</p>}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
