"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ArrowLeft, ArrowRight } from "lucide-react";

const benefits = [
  {
    src: "/assets/images_cases/CAPA.png",
    alt: "",
    title: (
      <span className="max-w-[157px]">Valorizar a empresa</span>
    )
  },
  {
    src: "/assets/images_cases/CAPA_01.png",
    alt: "",
    title: (
      <span className="max-w-[157px]">Melhorar a experiencia do cliente</span>
    )
  },
  {
    src: "/assets/images_cases/CAPA2_ARIEL.png",
    alt: "",
    title: (
      <span className="max-w-[211px]">Contar com segurança e ética no tratamento dos dados.</span>
    )
  },
  {
    src: "/assets/images_cases/TOP_04.jpg",
    alt: "",
    title: (
      <span className="max-w-[161px]">Aumentar a agilidade</span>
    )
  },
  {
    src: "/assets/images_cases/CAPA_01.png",
    alt: "",
    title: (
      <span className="max-w-[161px]">Melhorar a tomada de decisão</span>
    )
  },
  {
    src: "/images/image-card-retention.png",
    alt: "",
    title: (
      <span className="max-w-[161px]">Melhorar a retenção e o recrutamento.</span>
    )
  }
];

export default function LandingPageCases() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    if (inView && swiperRef.current) {
      swiperRef.current.slideTo(0, 1000, false);
    }
  }, [inView]);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <section id="cases" ref={ref} className="flex flex-col w-full sm:px-0 sm:mb-16 pt-20 sm:pt-28 bg-gradient-to-b bg-[#f7f7f7] 6">
      <div className="flex flex-col items-center gap-4 px-4 xl:px-4 sm:gap-10">
       
        <div className="w-full max-w-[1440px] flex flex-col justify-center items-center sm:px-[70px] pb-6 sm:pb-0">
          <h1 className="text-center text-2xl md:text-5xl lg:text-6xl font-semibold text-primary-gradient pb-6 ">
            Cases
          </h1>
          <p className="text-foreground text-base sm:text-xl text-center max-w-[960px]">
          TRABALHOS IMPORTANTES QUE SE DESTACAM PELO CURTO PRAZO DE PRODUÇÃO, VARIEDADE NOS SERVIÇOS PRESTADOS, E TOTAL SATISFAÇÃO DOS CLIENTES. <br />
            <br />
            Mas, quais as principais vantagens de nós contatar?
          </p>
        </div>
        <div className="w-full max-w-[1440px] relative">
          <Swiper
            onSwiper={(swiper:any) => {
              swiperRef.current = swiper;
            }}
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={false}
            pagination={false}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
              1536: {
                slidesPerView: 4,
              },
            }}
            className={`mySwiper mx-8 overflow-visible ${inView ? "animate-slide-in" : "opacity-0"}`}
          >
            {benefits.map((item, index) => (
              <SwiperSlide key={item.title + item.alt}>
                <div className="relative h-[354px] w-full max-w-[272px] mx-auto my-8 transition-all duration-300 hover:scale-105">
                  <img
                    className="object-cover"
                    src={item.src}
                    alt={item.alt}
                  />
                  <h2 className="flex w-full h-full items-start justify-center text-white text-center font-semibold text-xl pt-[221px]">
                    {item.title}
                  </h2>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex justify-center gap-4 mt-4 opacity-85">
          <button onClick={handlePrev} className="group flex items-center justify-center bg-secondary-gradient rounded-full h-10 w-12">
            <ArrowLeft className="opacity-70 group-hover:opacity-100" />
          </button>
          <button onClick={handleNext} className="group flex items-center justify-center bg-secondary-gradient rounded-full h-10 w-12">
            <ArrowRight className="opacity-70 group-hover:opacity-100" />
          </button>
        </div>
      </div>
    </section>
  );
}
