import React from 'react'


function ProjectCardComponent(props: any) {
  return (
    <div className='flex flex-col items-center my-20'>
        <svg className='text-center mx-auto mb-5' xmlns="http://www.w3.org/2000/svg" height="74" width="77.5" viewBox="0 0 640 512"><path fill="#bdb76b" d={props.icon}/></svg>
        <h2 className='text-center text-[24px] font-thin uppercase'>{props.title}</h2>
        <p className='text-center text-[14px] w-[220px] opacity-[50%]'>{props.text}</p>
    </div>
  )
}

export default ProjectCardComponent