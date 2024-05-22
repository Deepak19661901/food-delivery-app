import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './component/navbar/Navbar'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './component/Footer/Footer'
import LoginPopoup from './component/LoginPopup/LoginPopoup'
import Verfiy from './pages/Verfiy/Verfiy'
import MyOrder from './pages/MyOrders/MyOrder'


const App = () => {
  const [showLogin,setShowLogin]=useState(false)

  return (
    <>
    {
      showLogin?
          <LoginPopoup setShowLogin={setShowLogin}/>:<></>
    }
      <div className='app'>
        <Navbar  setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/verify' element={<Verfiy/>}/>
          <Route path='/myorders'element={<MyOrder/>} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
