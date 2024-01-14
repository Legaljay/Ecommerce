// eslint-disable-next-line no-unused-vars
import React from 'react'

const SellerLogin = () => {
  return (
    <div className=''>
      {/*login page header*/}
      <div className='flex flex-row justify-between border-b-teal-300 shadow-lg p-2'> 
        <div className="">VendaVault</div>
        <div className="">Sign-in symbol</div>
      </div>
      <div className="flex flex-col content-between w-3/5 mx-auto mt-1">
        {/*login form section*/}
        <div className='tracking-wide'>
          <div className='flex justify-center mt-5 mb-5 pt-5 pb-5'>
            <h1 className=' text-lg font-sans font-semibold'>Welcome to Vendavault</h1>
          </div>
          <div className='border-2 border-b-blue-200 rounded shadow-lg p-1 mb-5 w-full'>
            <h4 className='text-sm font-sans font-medium p-2 text-shadow-lg'>Sign In</h4>
          </div>
          <form className= 'py-1 text-sm font-sans font-normal'>
            <label htmlFor="Email">Email</label>
            <input type="text" className='w-full block p-1 mb-5 border border-gray-400 rounded' placeholder='tundewilliams@gmail.com' name='email' id='email' />
            <label htmlFor="Password">Password</label>
            <input type="text" className='w-full block p-1 mb-5 border border-gray-400 rounded' placeholder='.........' name='password' id='password'/>
          </form>
          {/*login button section*/}
          <div className='flex justify-center mb-5 w-4/5 mx-auto'>
            <div className='h-40 p-1 flex flex-col w-5/6 border-b-2 border-gray-300'>
              <button className='mb-2 border border-gray-500 p-1 bg-black text-white text-shadow-lg rounded'> Sign In</button>
              <div className='flex justify-between'>
                <div className='button_footer_left'>
                  <input type="checkbox" name="t&c" id="t&c" />
                  <span className='ml-2 font text-xs'>I accept all terms & conditions</span>
                </div>
                <div className='text-xs'>
                  <p>Already have an account? <span>Sign Up</span> </p>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-5 flex justify-center w-4/5 mx-auto'>
            <div className='p-1 flex flex-col w-5/6'>
              <p className='flex flex-row justify-center py-1 my-2'>Or connect with:</p>
              <button className='bg-black grid grid-cols-5 gap-2 px-2 mb-3 shadow-xl text-white rounded'>
                <div className='col-span-1 '>Flogo</div>
                <div className='col-span-4 px-5 py-1 text-white font-semibold'>Continue with Facebook</div>
              </button>
              <button className='grid grid-cols-5 gap-2 px-2 mb-20 border shadow-lg rounded text-white bg-black'>
                <div className='col-span-1'>GLogo</div>
                <div className='col-span-4 px-5 py-1 font-semibold'>Continue with Google</div>
              </button>
            </div>
          </div>
        </div>
      </div> {/*end mid content section*/}
      <div className='m-0 p-10 border-t-2 border-grey-200'>
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
      <div className=' flex justify-center text-xs'>All rights reserved</div>
    </div>
  )
}

export default SellerLogin