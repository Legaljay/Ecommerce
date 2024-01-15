// eslint-disable-next-line no-unused-vars
import React from 'react'
//import Button from './button';

const Banner = () => {
    // const btn_title = (
    //     "Become a Seller"
    // )
        
    const bannerStyle = {
        backgroundImage: "url('your-image-url.jpg')", 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '400px'
      };
  return (
    <div className='border border-b-2 border-gray-500' style={bannerStyle}>
        <div className='flex flex-col space-y-8 p-8 w-1/2'>
          <h1>An Online Community linking <br /> buyers to sellers </h1>
          <p>Choose from categories and buy products from available sellers</p>
          <button type='button' className='bg-white-500 text-blue text-sm py-2 px-2 outline rounded w-1/4'> Become a Seller </button>
        </div>
        
    </div>

  )
}

export default Banner