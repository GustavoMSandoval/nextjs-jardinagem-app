import React from 'react';
import ServiceCardComponent from '../elementsComponents/ServiceCardComponent/ServiceCardComponent';
import JobsComponent from '../MasterComponents/JobsComponent';

export default function LandingPageServices() {
  return (
    <>
   
    <ServiceCardComponent imageBottomDirection linkImg="/images/images_cards/paisagismo-vasos.jpg" title="jardins&cia" text="Somos uma empresa especializada em paisagismo e jardinagem que tem como principal objetivo proporcionar criatividade, beleza e bem-estar por meio de seus serviços. Com uma equipe altamente qualificada, criamos projetos de jardins externos e internos que são únicos e personalizados para cada cliente." buttonText="Contato"/>
    <ServiceCardComponent imageBottomDirection imageRightDirection  style="bg-[#f5f2f0] " linkImg="/images/images_cards/jardins.png" title="serviços" text="Oferecemos total assistência na manutenção e reformulação de jardins já existentes, garantindo que o elemento paisagístico seja mantido belo e exuberante em sua plenitude." buttonText="conheça nossos serviços"/>
    <ServiceCardComponent imageBottomDirection style=" xl:h-[700px] " linkImg="/images/images_cards/paisagismo-jardinagem-jardinsecia6.jpg" title="manutenção" text="Executamos manutenção de jardim periódica:" description="mensal,
    quinzenal ou semanal" buttonText="quero contratar"/>
     <ServiceCardComponent imageBottomDirection imageRightDirection linkImg="/images/images_cards/supervisao-jardinagem2-jardinsecia.jpg" title="supervisão" text="Se você possui um jardim ou gramado que necessite de tratamento, recuperação, reestruturação, reconstrução ou se você quer ter um jardim conte com a Jardins & Cia para realizar seu projeto. Aqui você vai encontrar:" description="rapidez, agilidade, eficiência, mão de obra qualificada e atendimento personalizado." buttonText="solicite um orçamento"/>
    <JobsComponent/>
    
    </>
  )
}
