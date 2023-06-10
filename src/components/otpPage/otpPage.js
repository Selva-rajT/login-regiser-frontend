import React ,{useState} from 'react'
import './otpPage.css';
import Navbar from '../navBar/navBar';
import { Link } from 'react-router-dom';
import {userLogin} from '../../services/loginService';
import harry from '../../assets/harry.png';


const OtpPage = () => {
    
  return (
    <div className='container'>
        <Navbar />
        <img src={harry} alt='harry' className='harry'></img>
       <div className='inner-container'>
            <div className='form-container'>
                <form >
                    <h2>OTP Verification</h2>
                    {loading?<div className="loader1"></div>:null}
                        <label htmlFor='email'>Email :</label>
                        <input type='email' name="email" required onChange={(e)=>setEmail(e.target.value)} value={email}></input><br/>
                        <label htmlFor='otp'>Verification Code :</label>
                        <input type='number' name='otp' required onChange={(e)=>setOtp(e.target.value)} value={password}></input><br/>
                        <p className='forgot'><Link to='/forgot'>forgot password ?</Link></p><br/>
                        <div className='button-container'>
                            <button onClick={handleSubmit} disabled={loading} >Submit</button>
                            <button onClick={clearForm}>Clear</button>
                        </div>                   
                    <p className='register'>otp is valid for {sec} seconds</p>
                </form>
            </div>
            <div className='quote-container'>
                <div className='quote'>
                    {/* <p>It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends</p> */}
                </div>
            </div>
            
       </div>
    </div>
  )
}

export default OtpPage;