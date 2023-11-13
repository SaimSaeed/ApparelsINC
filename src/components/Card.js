import React from 'react'
import Pic1 from "../Assets/Pic1.jpg"
import Pic2 from "../Assets/Pic2.jpg"
import Pic3 from "../Assets/Pic5.jpg"
import Pic4 from "../Assets/Pic4.jpg"



function Card() {
  return (
    <div className='flex w-full h-80'>
<div className='bg-purple-500 w-1/2 relative'>
  <div className='bg-fuchsia-500 w-1/5 absolute rounded text-center mt-2 ml-2  text-[0.7rem] sm:text-sm md : text-[1rem]'>Fashion</div>
<a href='/' className='absolute top-64 left-5 bg-transparent border-fuchsia-700 px-5 py-2 border-2  text-fuchsia-700'>Read More</a>
<img src={Pic1} alt="img1" className='w-full h-full' />
</div>
<div className='bg-purple-500 w-1/2 relative hidden md:block '>
  <div className='bg-green w-1/5 absolute rounded text-center mt-2 ml-2 sm:text-sm md : text-[1rem]'>Looks</div>
<a href='/' className='absolute top-64 left-5 bg-transparent border-fuchsia-700 px-5 py-2 border-2  text-fuchsia-700'>Read More</a>
<img src={Pic2} alt="img1" className='w-full h-full' />
</div>
<div className='bg-purple-500 w-1/2 relative hidden md:block '>
  <div className='bg-rose w-1/5 absolute rounded text-center mt-2 ml-2 sm:text-sm md : text-[1rem]'>Beauty</div>
<a href='/' className='absolute top-64 left-5 bg-transparent border-fuchsia-700 px-5 py-2 border-2  text-fuchsia-700'>Read More</a>
<img src={Pic3} alt="img1" className='w-full h-full' />
</div>
<div className='bg-purple-500 w-1/2 relative '>
  <div className='bg-violet-600 w-1/4 absolute rounded text-center mt-2 ml-2  text-[0.7rem] sm:text-sm md : text-[1rem]'>Cosmetics</div>
<a href='/' className='absolute top-64 left-5 bg-transparent border-fuchsia-700 px-5 py-2 border-2  text-fuchsia-700'>Read More</a>
<img src={Pic4} alt="img1" className='w-full h-full' />
</div>

    </div>
  )
}

export default Card