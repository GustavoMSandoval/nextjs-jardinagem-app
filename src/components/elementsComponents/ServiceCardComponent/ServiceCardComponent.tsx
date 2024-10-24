import React from 'react';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import LinkComponent from '../LinkComponent/LinkComponent';

function ServiceCardComponent(props: any) {
  return (
    <div className={`flex items-center flex-col md:flex-row ${props.style} ${props.imageRightDirection ? 'md:flex-row-reverse' : ''} ${props.imageBottomDirection ? 'flex-col-reverse' : ''}`}>
      <img className='w-full h-[50%]  object-cover md:w-1/2 ' src={props.linkImg} alt="" />
      <div className='flex flex-col items-center p-5 m-5 md:m-0 w-full md:w-1/2 text-center'>
        <h2 className='mb-[20px] uppercase text-[28px] md:text-[36px] xl:text-[48px]'>{props.title}</h2>
        <p className='mb-[20px] xl:mx-5  text-[17px] md:text-[16px] lg:text-[16px] xl:text-[18px]'>{props.text}</p>
        <h3 className='w-[300px]  mb-[20px] text-center text-[18px] text-[#7a7a7a] md:text-[20px] uppercase'>{props.description}</h3>
        <LinkComponent text={props.linkText} />
        <ButtonComponent style="text-white bg-[#9abd6b] hover:bg-[#b1b968] hover:opacity-[53%] " text={props.buttonText} />
      </div>
    </div>
  );
}

export default ServiceCardComponent;
