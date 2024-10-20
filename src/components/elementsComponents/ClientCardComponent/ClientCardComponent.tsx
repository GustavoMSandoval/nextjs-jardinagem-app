import React from 'react'

function ClientCardComponent(props: any) {
  return (
    <div>
        <img className='rounded' src={props.image} alt="" />
        <p>{props.text}</p>
    </div>
  )
}

export default ClientCardComponent