import Image from 'next/image'
import React from 'react'

interface headingprops  {
    heading: string,
    text: string,
    link: string,
    image: any
}

const Card = ({heading, text, link, image} :headingprops) => {
  return (
    <div className="mx-[36px] h-[100%]  mb-[36px] grid-cols-1 relative overflow-x-hidden grid gap-20">
        <Image src={image} width={3500} height={2500} objectFit='cover' className='h-[100vh] hidden md:block ' alt="" />
       
        <div className="absolute top-[36px] left-[20px]">
          <h3 className='text-2xl font-bold'>{heading}</h3>
           <h4 className='text-xl font-semibold'>{text}</h4>
           <p className='text-lg font-bold'>{link}</p>
        </div>
    </div>
  )
}

export default Card