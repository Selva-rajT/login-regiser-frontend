import React, { useState, useEffect } from 'react';
import {validate} from 'react-email-validator';
import './otpPage.css';
import '../loginPage/loginPage.css';
import Navbar from '../navBar/navBar';
import harry1 from '../../assets/harry1.png';
import { getOtp,verifyOtp } from '../../services/otpService';


const OtpPage = () => {
  const [loading, setLoading] = useState(false);
  const [showOtp,setShowOtp]=useState(false);
  const [error,setError]=useState('') ; ////see  1
  const [alert,setAlert]=useState(false); //showing alert on email validation
  const [reSend,setResend]=useState(false); //to show the resend link
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [sec, setSec] = useState(10);
  const[isRunning,SetRunning]=useState(false);//set the clock
  
  useEffect(() => {
    let timer;
    if (email&&isRunning) {
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
  }, [email,isRunning]);

  useEffect(()=>{
    if(sec==0)
          setResend(true);
  },[sec]);

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };
  const handleOtpChange = event => {
    setOtp(event.target.value);
  };

  const sendCode=(event)=>{
    event.preventDefault();
    if(validate(email)){
        setLoading(true);
        getOtp(email)
          .then(res=>{
              setAlert(false);
              setError('')
              setLoading(false);
              setShowOtp(true);
              SetRunning(true);
            })
          .catch(err=>{
          console.log(err);
          setLoading(false);
          setShowOtp(false);
            })
    }
    else {
      setAlert(true);
      setError('Enter correct email id..');
    }
    
     
  }
  const handleSubmit=(event)=>{
    event.preventDefault();
    if(otp){
      setLoading(true);
      verifyOtp(otp)
        .then(res=>{
          ///password change page
          setLoading(false);
        })
        .catch(err=>{
          setAlert(true);
          setError('wrong otp')
          setLoading(false);
        });
    }
  }

  // =========resend the otp
 const resendCode=(event)=>{
  event.preventDefault();
  if(validate(email)){
    setLoading(true);
    getOtp(email)
      .then(res=>{
          setLoading(false);
          setSec(10);
          SetRunning(true);
          setResend(false);
      })
      .catch(err=>{
        // setLoading(false);
        // setAlert(true);
        // setError('error in resending code');
        console.log(err);

      })
  }
 }
  return (
    <div className='container'>
      <Navbar />
      <img src={harry1} alt='harry' className='harry' />
      <div className='inner-container'>
        <div className='form-container'>
          <form>
            <h2 className='h2'>OTP Verification</h2>
            {(alert)?<p className='error'>{error}</p>:null}
            {loading ? <div className='loader1'></div> : null}
            {!showOtp?<span>
            <label htmlFor='email'>Email :</label>
            <div className='email_container'>
              <input
                type='email'
                name='email'
                required
                onChange={handleEmailChange}
              />
              <button onClick={sendCode} >Send code</button>
            </div>
            </span>:null}
           
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
              <button onClick={()=>{setOtp('');setError('')}}>Clear</button>
            </div>
            <p className='register'>OTP is valid for {sec} seconds</p>
            </span>:null}
            {reSend?<button className='resend' disabled={!reSend} onClick={resendCode}>Resend the code</button>:null}            {/* ---------- 1--------  */}
            
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
