import Image from 'next/image'
import React from 'react'
import banner from '../public/assets/banner.jpg'

const Banner = () => {
  return (
    <div className="w-full ">
        <Image src={banner} layout="intrinsic" objectFit='cover' alt="" />

        <div className='flex flex-col space-y-6 mt-14 ml-14'>
            <span className='text-xl mb-5 font-bold'>STUDENTS AND TEACHERS</span>
            <h2 className='text-4xl mb-5 font-bold'>Save big on Creative Cloud.</h2>
            <p className='text-lg font-semibold mb-5 w-[35rem]'>Save over 60% on 20+ apps. And get a month at no charge when you pay upfront by Sep 5.</p>
            <button className='bg-blue-700 max-w-[7rem] px-2 py-2 rounded-full text-white '>Buy now</button>
            <span className='text-blue-700 text-sm pl-6 font-bold mb-5'>see more</span>
        </div>

        <div className="flex  flex-col mt-9  items-center justify-center text-blue-700">
            <h4 className='text-xl font-bold text-[#000]'>Creative Cloud for:.</h4>
            <div className='flex mb-6 space-x-8'>
            <span className='hover:underline-offset-1 cursor-pointer hover:underline'>Individuals</span><span className='hover:underline-offset-1 cursor-pointer hover:underline'>Student & Teachers</span><span className='hover:underline-offset-1 cursor-pointer hover:underline'> Bussiness</span>
            </div>
            
        </div>
    </div>
  )
}

export default Banner