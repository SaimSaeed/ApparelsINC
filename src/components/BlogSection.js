import React from 'react'
import Overcoat from "../Assets/overcoat.jpg"


function BlogSection() {
  return (
    <div className='bg-grey w-full p-32 box-height'>
        <div className='flex container mx-auto'>
<div className='w-3/6 h-96'>
<div className='bg-purple-700 w-full h-96 relative  '>
  <h1 className='text-3xl text-white font-semibold pt-8 pl-10'>Clothing</h1>
  <button className='absolute w-2 h-2 bg-white bottom-0 right-0 p-1 m-8'></button>

</div>
<div className='flex w-full h-48'>
<div className='bg-black w-1/2 h-full relative  '>
<h1 className='text-3xl text-white font-semibold pt-8 pl-10'>Brands</h1>
  
<button className='absolute w-2 h-2 bg-white bottom-0 right-0 p-1 m-8'></button>

</div>
<div className='bg-purple-900 w-1/2 h-full relative  '>
<h1 className='text-3xl text-white font-semibold pt-8 pl-10'>Designs</h1>

<button className='absolute w-2 h-2 bg-white bottom-0 right-0 p-1 m-8'></button>

</div>
</div>

</div>

<div className='w-1/4 h-96' >
    <div className='bg-fuchsia-800 w-full h-1/2 relative  '>
  <h1 className='text-3xl text-white font-semibold pt-8 pl-10'>Makeup</h1>

    <button className='absolute w-2 h-2 bg-white bottom-0 right-0 p-1 m-8'></button>

    </div>
    <div className='bg-rose w-full h-1/2 relative  '>
  <h1 className='text-3xl text-white font-semibold pt-8 pl-10'>Acessories</h1>

    <button className='absolute w-2 h-2 bg-white bottom-0 right-0 p-1 m-8'></button>

    </div>
    <div className='bg-green w-full h-1/2 relative  '>
  <h1 className='text-3xl text-white font-semibold pt-8 pl-10'>Outfits</h1>

    <button className='absolute w-2 h-2 bg-white bottom-0 right-0 p-1 m-8'></button>

</div>

 
</div>
<div className=' w-2/5 h-96'>
<div className='bg-black w-full h-48 flex flex-col items-center justify-center'>
<h1 className='text-white text-2xl font-semibold mr-28 mb-5'>Search this Blog:</h1>
<div className='flex'>
<input type='search' className='w-64 bg-black border border-grey' placeholder='Search'/>
<div className='text-white p-4 border'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></div>
</div>
</div>
<div className='w-full h-96'>
<img src={Overcoat} alt='OverCoat' className='h-full w-full'/>
</div>
</div>
    </div>
    </div>
  )
}

export default BlogSection