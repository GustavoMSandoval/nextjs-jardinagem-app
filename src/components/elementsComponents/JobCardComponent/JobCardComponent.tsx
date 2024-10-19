import React from 'react';

function JobCardComponent(props: any) {
  return (
    <div className='flex justify-start items-center gap-5 w-full  p-5 rounded-lg inline-block'>
      <img className='rounded-full w-36 h-36 object-cover' src={props.linkImg} alt={props.title} />
      <div className='flex flex-col gap-1'>
        <h2 className='text-[20px] font-semibold'>{props.title}</h2>
        <p className='text-[14px] text-[#000000] opacity-[50%] w-[200px]'>{props.text}</p>
      </div>
    </div>
  );
}

export default JobCardComponent;
