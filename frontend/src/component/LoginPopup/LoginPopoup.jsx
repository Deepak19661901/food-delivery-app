import React, { useContext, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'
import axios from 'axios'
const LoginPopoup = ({setShowLogin}) => {

  const {url,token,setToken} = useContext(StoreContext)
  const [currentState,setCurrentState]=useState("Login")
  // Here am taking data from the user for login and signup
  const [data,setData]=useState({
    name:"",
    email:"",
    password:""
  })

  const onChangeHandler =(event)=>{
      const name = event.target.name
      const value = event.target.value
      setData(data=>({...data,[name]:value}))
  }

  const onLogin = async(event)=>{
      event.preventDefault()
      let newUrl = url
      if(currentState==="Login"){
        newUrl = `${newUrl}/api/user/login`
      }
      else{
        newUrl = `${newUrl}/api/user/register`
      }

      const response = await axios.post(newUrl,data)
      if(response.data.success){
        setToken(response.data.token)
        // console.log(`token in loginPopup ${response.data.token}`)
        localStorage.setItem('token',response.data.token)
        setShowLogin(false)
      }
      else{
        alert(response.data.message)
      }

  }

  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className="login-popup-container">

        <div className='loign-popup-title'>
          <h2>{currentState}</h2>
          <img  onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>

        <div className="login-popup-inputs">
        {
          currentState==="Login"?<></>:<input type="text" value={data.name} name='name' onChange={onChangeHandler} placeholder='Your Name' required />
        }
          <input type="email" name='email' onChange={onChangeHandler} value={data.email} placeholder='Your Email' required />
          <input type="password" name='password' value={data.password} onChange={onChangeHandler} placeholder='Your Password' required />
        </div>
        <button type='submit'>{currentState==="Sign Up"?"Create Account":"Login"}</button>
        <div className="login-popup-condition">
         
        </div>
        { 
          currentState==="Login"? 
             <p>Create a New Account ?<span  onClick={()=>setCurrentState("Sign Up")} >Click Here</span></p>: 
            <p>Already have an account ? <span onClick={()=>setCurrentState("Login")}  >Login here</span></p>
        } 
      
     
      </form>
    </div>
  )
}

export default LoginPopoup
