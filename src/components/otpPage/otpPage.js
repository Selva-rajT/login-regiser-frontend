import React, { useState, useEffect } from 'react';
import './otpPage.css';
import '../loginPage/loginPage.css';
import Navbar from '../navBar/navBar';
import harry1 from '../../assets/harry1.png';
import { getOtp } from '../../services/otpService';

const OtpPage = () => {
  const [loading, setLoading] = useState(false);
  const [showOtp,setShowOtp]=useState(false);
  const [disable,setDisable]=useState(false);//disable the send otp button
  const [error,setError]=useState(false) ; ////see  1
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [sec, setSec] = useState(10);

  useEffect(() => {
    let timer;

    if (email&&showOtp) {
      timer = setInterval(() => {
        setSec(prevSec => {
          if (prevSec === 0) {
            clearInterval(timer);
            return 0;
          }
          return prevSec - 1;
        });
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [email,showOtp]);

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handleOtpChange = event => {
    setOtp(event.target.value);
  };
  const sendCode=(event)=>{
    event.preventDefault();
    setLoading(true);
    getOtp(email)
      .then(res=>{
        setLoading(false);
        setShowOtp(true);
      })
      .catch(err=>{
        console.log(err);
        setLoading(false);
        setShowOtp(false);
      })
     
  }
  const handleSubmit=(event)=>{
    event.preventDefault();
    console.log(email);
   
  }

  return (
    <div className='container'>
      <Navbar />
      <img src={harry1} alt='harry' className='harry' />
      <div className='inner-container'>
        <div className='form-container'>
          <form>
            <h2 className='h2'>OTP Verification</h2>
            {loading ? <div className='loader1'></div> : null}
            <label htmlFor='email'>Email :</label>
            <div className='email_container'>
              <input
                type='email'
                name='email'
                required
                onChange={handleEmailChange}
              />
              <button onClick={sendCode} disabled={disable}>Send code</button>
            </div>
            {(!showOtp)?<p>enter email to get the verification code.</p>:null}
            {showOtp?<span>
            <label htmlFor='otp'>Verification Code :</label>
            <input
              type='number'
              name='otp'
              required
              value={otp}
              onChange={handleOtpChange}
            />
            <br />
            <div className='button-container'>
              <button onClick={handleSubmit}>Submit</button>
              <button onClick={()=>setOtp('')}>Clear</button>
            </div>
            <p className='register'>OTP is valid for {sec} seconds</p>
            </span>:null}
            {error?<p>error....please retry..</p>:null}             {/* ---------- 1--------  */}
          </form>
        </div>
        <div className='quote-container'>
          <div className='quote'>
            {/* <p>It takes a great deal of bravery to */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpPage;
