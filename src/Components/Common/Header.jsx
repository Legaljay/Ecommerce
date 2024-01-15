/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'

const Header = ({ elements }) => {
    
  return (
    <div>
        <div className='flex flex-row justify-between border-b-teal-300 shadow-lg p-2'> 
            <div className=''>VendaVault</div>
            {elements && (
                <div>{elements}</div>
            )}
        </div>
    </div>
  )
}

export default Header