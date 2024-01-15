// eslint-disable-next-line no-unused-vars
import React from 'react'


// eslint-disable-next-line react/prop-types
const TodayDeals = ({imgSrc, title}) => {
    return (
            
            <div className='flex flex-col items-center' style={{ height: '120px', width: '250px' }}>
                {imgSrc && <img src={imgSrc} alt="all deals" style={{ height: '100%', width: '100%' }} className='border border-gray-600' />}
                {title && <p>{title}</p>}
            </div>
       
      );
}

export default TodayDeals