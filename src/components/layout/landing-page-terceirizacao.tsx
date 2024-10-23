import React from 'react';
import ParallaxComponent from '../elementsComponents/ParallaxComponent/ParallaxComponent';
import TerceirizacaoCardComponent from '../elementsComponents/TerceirizacaoCardComponent/TerceirizacaoCardComponent';

export default function LandingPageTerceirizacao() {
  return (
    <div className='my-20'>
    
        <ParallaxComponent backgroundImage="url('https://jardinsecia.com.br/wp-content/uploads/2023/05/paisagismo-jardinagem-jardinsecia4-2-e1683398684301.jpg')"
        title="projetos personalizados de jardim interno e externo" text="Criamos projetos de jardins externos e internos que são únicos e personalizados para cada cliente." buttonText="fale conosco"/>
      
        <TerceirizacaoCardComponent/>
    </div> 
  )
}

