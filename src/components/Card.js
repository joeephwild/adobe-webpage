
import React from 'react'



const Card = ({heading, text, link, image}) => {
  return (
    <div className="mx-[36px] h-[100%]  mb-[36px] grid-cols-1 relative overflow-x-hidden grid gap-20">
        <img src={image} className='h-[100vh] hidden md:block ' alt="" />
       
        <div className="absolute top-[36px] left-[20px]">
          <h3 className='text-2xl font-bold'>{heading}</h3>
           <h4 className='text-xl font-semibold'>{text}</h4>
           <p className='text-lg font-bold'>{link}</p>
        </div>
    </div>
  )
}

export default Card