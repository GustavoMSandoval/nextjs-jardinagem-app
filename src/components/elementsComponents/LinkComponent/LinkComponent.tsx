import React from 'react'

export default function LinkComponent(props: any) {
  return (
    <a href={props.link} className='text-[16px] text-[#3a8637] text-left tracking-[1px] leading-[21.28px] uppercase cursor-pointer'>{props.text}</a>
  )
}
