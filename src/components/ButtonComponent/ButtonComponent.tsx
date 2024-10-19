import React from 'react'

export default function ButtonComponent(props: any) {
  return (
    <button className={`px-4 py-2 tracking-[2px] ${props.style} uppercase`}>{props.text}</button>
  )
}
