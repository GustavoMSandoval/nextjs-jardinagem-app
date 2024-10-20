import React from 'react';
import ButtonComponent from '../ButtonComponent/ButtonComponent';

export default function ParallaxComponent(props: any) {
  return (
    <div className={`relative h-screen bg-fixed bg-center bg-cover`} style={{ backgroundImage: `${props.backgroundImage}`}}>
      
        
      <div className={`absolute inset-0 flex items-center justify-center flex-col bg-black bg-opacity-10 text-center`}> 
        
            <h2 className='text-white tracking-[6px] uppercase'>{props.subtitle}</h2>
            <h1 className="text-white text-center text-[36px] md:text-[66px] xl:text-[96px] tracking-[-2px]   font-light leading-tight mb-[56px] text-wrap uppercase">{props.title}</h1>
            <p className='text-white text-[16px] text-center xl:text-[18px] w-2/5 mb-4'>{props.text}</p>
            <ButtonComponent style="text-white text-[14px] px-8 py-3 border-2 border-inherit hover:bg-white hover:text-black " text={props.buttonText}/>

      </div>
    </div>
  );
}

