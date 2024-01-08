import { useState } from 'react'
import './App.css'
import SellerLogin from './Components/Pages/Login/SellerLogin'

function App() {
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0)

  return (
    <h1 className="">
      <SellerLogin/>
    </h1>
  )
    
}

export default App
