/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import Footer from '../../Common/footer'
import Header from '../../Common/header'
import Banner from '../../Common/banner';
import TodayDeals from '../../Common/TodayDeals';
import { useNavigate } from 'react-router-dom';


const Landing = () => {
  const navigate = useNavigate()
  const dealsList = [
    { imgSrc: 'VendaVault/src/assets/react.svg', title:'All Deals'},
    { imgSrc: 'VendaVault/src/assets/react.svg', title:'Electronics'},
    { imgSrc: 'VendaVault/src/assets/react.svg', title:'Home Appliances' },
    { imgSrc: 'VendaVault/src/assets/react.svg', title:'Fashion' },
    { imgSrc: 'VendaVault/src/assets/react.svg', title:'Vehicle' },
    { imgSrc: 'VendaVault/src/assets/react.svg', title:'Digital Products'},
    { imgSrc: 'VendaVault/src/assets/react.svg', title:'Properties' },
  ]
  const elements = (
    <div className='flex space-x-20'>
      <div className='flex border border-gray-400 rounded'>
        <input 
          type='search' 
          placeholder="What are you looking for? &#128269;"
          className='px-10 text-xs w-full focus:outline-none focus:border-none '
        />
        <select type='search' placeholder='All Categories' className='px-8 text-sm mx-2 focus:outline-none focus:border-none'>
          <option value="" disabled selected hidden>All Categories</option>
        </select>
        <div>
          <button type='submit' className='py-2 px-8'>Search</button>
        </div>
      </div>
      <div className='flex border'>
        <button onClick={() => navigate('/sellerlogin')} type="button" className='py-1 px-8 text-lg w-1/2'>Login</button>
        <button onClick={() => navigate('/register')} type="button" className='py-1 px-8 bg-black text-white'>Register</button>
      </div> 
    </div>
  );

  return (
    <div className=''>
      
      <div className='w-11/12 mt-1 mx-auto'>
      
      <Header elements={elements}/>
      <Banner />
      <div className='my-20 '>
        <h3>Today's Deals</h3>
        <div className='flex gap-6'>
        {dealsList.map((deal, index)=>(
            <TodayDeals key={index} imgSrc={deal.imgSrc} title={deal.title}/>
        ))}
      </div>
      </div>
      <Footer />
    </div>


    </div>
    
  );
}

export default Landing