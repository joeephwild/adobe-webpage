import Image from 'next/image'
import React from 'react'

interface headingprops  {
    heading: string,
    text: string,
    link: string,
    image: object
}

const Card = ({heading, text, link, image} :headingprops) => {
  return (
    <div>
        <Image />
    </div>
  )
}

export default Card