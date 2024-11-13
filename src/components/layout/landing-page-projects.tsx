import React from 'react';
import ParallaxComponent from '../elementsComponents/ParallaxComponent/ParallaxComponent';
import ButtonComponent from '../elementsComponents/ButtonComponent/ButtonComponent';
import ProjectCardComponent from '../elementsComponents/ProjectCardComponent/ProjectCardComponent';
import ServiceCardComponent from '../elementsComponents/ServiceCardComponent/ServiceCardComponent';
import ServiceCardCarouselComponent from '../elementsComponents/ServiceCardCarousel/ServiceCardCarousel';


export default function LandingPageProjects() {

  const itens = [
    {
      icon: "M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
      ,
      title: "residencial",
      text: "Recuperação, reestruturação e criação do jardim da sua casa."
    },
    {
      icon: "M48 0C21.5 0 0 21.5 0 48L0 464c0 26.5 21.5 48 48 48l96 0 0-80c0-26.5 21.5-48 48-48s48 21.5 48 48l0 80 96 0c26.5 0 48-21.5 48-48l0-416c0-26.5-21.5-48-48-48L48 0zM64 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm112-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM80 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM272 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16z",
      title: "condomínios e empresas",
      text: "Manutenção e criação de projetos de paisagismo e jardinagem para condomínios e empresas."
    },
    {
      icon: "M288 64l0 64 128 0L368 64l-80 0zM419.2 25.6L496 128l80 0c17.7 0 32 14.3 32 32l0 64c17.7 0 32 14.3 32 32s-14.3 32-32 32c-29.2-38.9-75.7-64-128-64s-98.8 25.1-128 64l-64 0c-29.2-38.9-75.7-64-128-64s-98.8 25.1-128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32l0-64c0-17.7 14.3-32 32-32l160 0 0-80c0-26.5 21.5-48 48-48l96 0c20.1 0 39.1 9.5 51.2 25.6zM152 256l16 0c12.1 0 22.1 8.9 23.8 20.6c7.6 2.2 14.9 5.3 21.7 9c9.4-7 22.8-6.3 31.3 2.3l11.3 11.3c8.6 8.6 9.3 21.9 2.3 31.3c3.7 6.8 6.8 14.1 9 21.7c11.6 1.7 20.6 11.7 20.6 23.8l0 16c0 12.1-8.9 22.1-20.6 23.8c-2.2 7.6-5.3 14.9-9 21.7c7 9.4 6.3 22.8-2.3 31.3l-11.3 11.3c-8.6 8.6-21.9 9.3-31.3 2.2c-6.8 3.7-14.1 6.8-21.7 9C190.1 503.1 180.1 512 168 512l-16 0c-12.1 0-22.1-8.9-23.8-20.6c-7.6-2.2-14.9-5.3-21.7-9c-9.4 7.1-22.8 6.3-31.3-2.2L63.8 468.9c-8.6-8.6-9.3-21.9-2.3-31.3c-3.7-6.9-6.8-14.1-9-21.8C40.9 414.1 32 404.1 32 392l0-16c0-12.1 8.9-22.1 20.6-23.8c2.2-7.6 5.3-14.9 9-21.8c-7-9.4-6.3-22.8 2.3-31.3l11.3-11.3c8.6-8.6 21.9-9.3 31.3-2.3c6.8-3.7 14.1-6.8 21.7-9c1.7-11.6 11.7-20.6 23.8-20.6zm8 176a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM448.2 276.6c1.7-11.6 11.7-20.6 23.8-20.6l16 0c12.1 0 22.1 8.9 23.8 20.6c7.6 2.2 14.9 5.3 21.8 9c9.4-7 22.8-6.3 31.3 2.3l11.3 11.3c8.6 8.6 9.3 21.9 2.2 31.3c3.7 6.8 6.8 14.1 9 21.7c11.6 1.7 20.6 11.7 20.6 23.8l0 16c0 12.1-8.9 22.1-20.6 23.8c-2.2 7.6-5.3 14.9-9 21.7c7 9.4 6.3 22.8-2.2 31.3l-11.3 11.3c-8.6 8.6-21.9 9.3-31.3 2.2c-6.9 3.7-14.1 6.8-21.8 9C510.1 503.1 500.1 512 488 512l-16 0c-12.1 0-22.1-8.9-23.8-20.6c-7.6-2.2-14.9-5.3-21.7-9c-9.4 7.1-22.8 6.3-31.3-2.2l-11.3-11.3c-8.6-8.6-9.3-21.9-2.2-31.3c-3.7-6.9-6.8-14.1-9-21.8C360.9 414.1 352 404.1 352 392l0-16c0-12.1 8.9-22.1 20.6-23.8c2.2-7.6 5.3-14.9 9-21.8c-7-9.4-6.3-22.8 2.2-31.3l11.3-11.3c8.6-8.6 21.9-9.3 31.3-2.3c6.8-3.7 14.1-6.8 21.7-9zM528 384a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z",
      title: "construtoras",
      text: "Fazemos projetos de paisagismo e jardinagem para construtoras."
    },
  ];

  const imagesTop = [
    "../images/images_cards/mesa-scaled.jpg",
    "../images/images_cards/mesa-de-jantar-vintage-e-casa-vintage-scaled.jpg",
    "../images/images_cards/paisagismo-jardinagem-jardinsecia1.jpg"
  ]

  const imagesbottom = [
    "../images/images_cards/swimming-pool-resort-scaled.jpg",
    "../images/images_cards/paisagismo-jardinagem-jardinsecia9.jpg",
    "../images/images_cards/cadeiras1.jpg"
  ];

  
  return (
    <>
      <ParallaxComponent backgroundImage="url('https://jardinsecia.com.br/wp-content/uploads/2023/05/paisagismo-jardinagem-jardinsecia5.jpg')" title="Projetos" text="As perspectivas são elaboradas em conjunto com o contratante, afim de agregar ideias que além de modernizar o ambiente, deixam características exclusivas para cada projeto." buttonText="entre em contato"/>
      <div className='flex flex-col items-center p-[50px]'>
        <div className='flex  flex-wrap  items-center justify-center'>
          {
            itens.map((item, index) => (
              <ProjectCardComponent key={index} icon={item.icon} title={item.title} text={item.text}/>
            ))
          }
        </div>
        <ButtonComponent style=" text-white bg-[#bdb76b] hover:opacity-[53%]" text="Fale com um especialista"/>
      </div>
      <ServiceCardCarouselComponent
        images={imagesTop}
        title="residencial"
        description="paisagismo, jardim e manutenção" 
        linkText="envie sua mensagem"
        buttonText="quero contratar"
        style="bg-[#f5f2f0]"/>
      <ServiceCardComponent imageRightDirection style="bg-[#f5f2f0]" linkImg="https://jardinsecia.com.br/wp-content/uploads/2023/05/background-chairs-colors-601169.jpg" title="comercial" description="projetos para empresas, shoppings, restaurantes, clubes" buttonText="quero contratar"/>
      <ServiceCardCarouselComponent
        images={imagesbottom}
        title="Condomínios"
        description="Paisagismo, jardim e manutenção para condomínios"
        linkText="Envie sua mensagem"
        buttonText="Quero contratar"
        style="bg-[#f5f2f0]"/>
    </> 
  )
}
