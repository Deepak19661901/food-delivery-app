import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={assets.logo} alt="" />
      <img className='profile' src="https://media.licdn.com/dms/image/v2/D5603AQHRtIrX0GPyDQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1721746770983?e=1730937600&v=beta&t=pAPF5qJvcr7qOLXA_suYnOt51kaJPf6sfVHau5YkQGA" alt="" />
      
    </div>
  )
}

export default Navbar
