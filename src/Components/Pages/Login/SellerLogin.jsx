// eslint-disable-next-line no-unused-vars
import React from 'react';
//import Footer from '../../Common/Footer.jsx';
import Footer from '../../Common/footer';
import Header from '../../Common/header';
const SellerLogin = () => {
  const elements = (
    <div>sign-in symbol</div>
  );
  return (
    <div className=''>
      {/*login page header*/}
      <Header elements={elements}/>
      <div className="flex flex-col content-between w-3/5 mx-auto mt-1">
        {/*login form section*/}
        <div className='tracking-wide'>
          <div className='flex justify-center mt-5 mb-5 pt-5 pb-5'>
            <h1 className=' text-lg font-sans font-semibold'>Welcome to Vendavault</h1>
          </div>
          <div className='border-2 border-b-blue-200 rounded shadow-lg p-1 mb-5 w-full'>
            <h4 className='text-sm font-sans font-medium p-2 text-shadow-lg'>Sign In</h4>
          </div>
          <form className= 'py-1 text-sm font-sans font-normal w-4/5 mx-auto'>
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
      <Footer />
      <div className=' flex justify-center text-xs'>All rights reserved</div>
    </div>
  )
}

export default SellerLogin