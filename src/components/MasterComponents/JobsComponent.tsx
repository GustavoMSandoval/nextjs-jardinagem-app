import React from 'react';
import JobCardComponent from '../elementsComponents/JobCardComponent/JobCardComponent';

function JobsComponent() {
  const jobsLeft = [
    {
      linkImg: "https://jardinsecia.com.br/wp-content/uploads/2023/05/paisagismo-jardinagem-jardinsecia7-150x150.jpg",
      title: "Limpeza de todas as plantas",
      text: "Manter as plantas limpas para garantir um jardim bonito e saudável.",
    },
    {
      linkImg: "https://jardinsecia.com.br/wp-content/uploads/2023/05/beautiful-modern-house-cement-view-from-garden-150x150.jpg",
      title: "Limpeza e refinamento do gramado",
      text: "Para garantir uma grama verde e bonita.",
    },
    {
      linkImg: "https://jardinsecia.com.br/wp-content/uploads/2023/05/poda-jardinecia-150x150.jpg",
      title: "Poda jardins",
      text: "A poda periódica mantém a beleza estética e mantém o elemento paisagístico.",
    },
  ];
  const jobsRight  = [
    {
        linkImg: "https://jardinsecia.com.br/wp-content/uploads/2023/05/pulverizacao-jardineciapaisagismo-150x150.jpg",
        title: "Pulverização",
        text: "Pulverização para controle de pragas e doenças, garantindo o bem estar.",
      },
      {
        linkImg: "https://jardinsecia.com.br/wp-content/uploads/2023/05/plantio-jardinsecia-paisagismo-150x150.jpg",
        title: "Adubação",
        text: "Fortalece e previne, garantindo um jardim mais bonito.",
      },
      {
        linkImg: "https://jardinsecia.com.br/wp-content/uploads/2023/05/paisagismo-jardinagem-jardinsecia2-150x150.jpg",
        title: "Recorte de canteiros",
        text: "Além de garantir a beleza e harmonização do jardim, o recorte de canteiros mantém as plantas mais saudáveis.",
      },
  ]

  return (
    <div className='flex flex-col justify-center md:flex-row lg:flex-row my-20  gap-[10vw]'>
      <div className=''>
          {jobsLeft.map((job, index) => (
            <JobCardComponent
              key={index}
              linkImg={job.linkImg}
              title={job.title}
              text={job.text}
            />
          ))}
      </div>
      <div className="">
          {jobsRight.map((job, index) => (
            <JobCardComponent
              key={index}
              linkImg={job.linkImg}
              title={job.title}
              text={job.text}
            />
          ))}
      </div>
    </div>
  );
}

export default JobsComponent;
