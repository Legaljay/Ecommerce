//import { useState } from 'react'
import './App.css'
import SellerLogin from './Components/Pages/Login/SellerLogin'
import Landing from './Components/Pages/home/Landing.jsx';
import Register from './Components/Pages/Register/Register'
import {Routes, Route} from 'react-router-dom';
function App() {
  // eslint-disable-next-line no-unused-vars
  //const [count, setCount] = useState(0)

  return (
   
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/sellerlogin" element={<SellerLogin />} />
      <Route path="/" element={<Landing />} />
    </Routes>
   
  
  )
    
}

export default App
