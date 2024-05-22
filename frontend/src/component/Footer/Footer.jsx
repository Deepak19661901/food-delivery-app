import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className='footer-content-left'>
          <img src={assets.logo} alt="" />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni ullam reiciendis excepturi veniam a delectus reprehenderit dolor veritatis eligendi maiores.</p>
          <div className='footer-social-icon'>
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className='footer-content-center'>
          <h2>Comapnay</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className='footer-content-right'>
          <h2>Get In Touch</h2>
          <ul>
            <li>+91 9508991868</li>
            <li>deepak@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>CopyRight 2024 @Tomato.com -All Right reserve </p>
      
    </div>
  )
}

export default Footer
