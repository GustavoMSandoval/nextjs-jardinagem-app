import React from 'react';
import ServiceCardComponent from '../elementsComponents/ServiceCardComponent/ServiceCardComponent';
import JobsComponent from '../MasterComponents/JobsComponent';

export default function LandingPageServices() {
  return (
    <>
    <ServiceCardComponent imageBottomDirection linkImg="/images/paisagismo-vasos.jpg" title="jardins&cia" text="Somos uma empresa especializada em paisagismo e jardinagem que tem como principal objetivo proporcionar criatividade, beleza e bem-estar por meio de seus serviços. Com uma equipe altamente qualificada, criamos projetos de jardins externos e internos que são únicos e personalizados para cada cliente." buttonText="Contato"/><ServiceCardComponent imageRightDirection style="bg-[#f5f2f0]" linkImg="https://jardinsecia.com.br/wp-content/uploads/2023/05/background-chairs-colors-601169.jpg" title="comercial" description="projetos para empresas, shoppings, restaurantes, clubes" buttonText="quero contratar"/>
    <JobsComponent/>
    
    </>
  )
}
