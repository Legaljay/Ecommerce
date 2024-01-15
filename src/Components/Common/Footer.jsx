// eslint-disable-next-line no-unused-vars
import React from 'react'

const Footer = () => {
  return (
    <div className='m-0 py-10 border-t-2 border-grey-200'>
        {/*login page footer section container*/}
        <div className='grid grid-cols-4 auto-cols-auto'>
            <div className='flex flex-col gap-4 px-1'>
                <h1 className='font-semibold'>Vendavault</h1>
                <p className='py-2'>A platform that links buyers with sellers</p>
                <div>
                    <h3 className='font-semibold py-4'>Social Handles:</h3>
                    <a href="#"><li><span>Fb Icon</span> Facebook</li></a>
                    <a href="#"><li><span>tw Icon</span> Twitter</li></a>
                    <a href="#"><li><span>LI Icon</span> LinkedIn</li></a>
                    <a href="#"><li><span>IG Icon</span> instagram</li></a>
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <h1 className='font-semibold'>Company</h1>
                <ul className=''>
                    <a href="#"><li>About us</li></a>
                    <a href="#"><li>Contact us</li></a>
                    <a href="#"><li>Department</li></a>
                    <a href="#"><li>FAQ</li></a>
                    <a href="#"><li>Blogs</li></a>
                    <a href="#"><li>Terms & Conditions</li></a>
                    <a href="#"><li>Security</li></a>
                </ul>
            </div>
            <div className='flex flex-col gap-4'>
                <h1 className='font-semibold'>Links</h1>
                <ul>
                    <a href="#"><li>Home</li></a>
                    <a href="#"><li>Marketplace</li></a>
                    <a href="#"><li>Token</li></a>
                </ul>
            </div>
            <div className='flex flex-col gap-4'>
                <h1 className='font-semibold'> Careers</h1>
                {/*  */}
                <div className=''>
                    <button className='border border-blue-300 px-6 py-0.5 rounded'>
                    <p>Seller/Vendor</p>
                    </button>
                </div>
                <div className=' text-xs mt-auto flex gap-4 pr-10'>
                    <span>Icon</span> <p>Write review</p> 
                    <span>
                    <div>
                    <p>Place Icon here</p>
                    </div>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer