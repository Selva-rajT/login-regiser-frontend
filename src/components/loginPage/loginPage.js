import React from 'react'
import './loginPage.css';
import Navbar from '../navBar/navBar';
import { Link } from 'react-router-dom';
import harry from '../../assets/harry.png';

const LoginPage = () => {
  return (
    <div className='container'>
        <Navbar />
        <img src={harry} alt='harry' className='harry'></img>
       <div className='inner-container'>
            <div className='form-container'>
                
                <form>
                    <h2>Log In</h2>
                    <label htmlFor='email'>Email :</label>
                    <input type='email' name="email" required ></input><br/>
                    <label htmlFor='password'>Password :</label>
                    <input type='password' name='password' required></input><br/>
                    <p className='forgot'><Link to='/forgot'>forgot password ?</Link></p><br/>
                    <div className='button-container'>
                        <button >Submit</button>
                        <button >Clear</button>
                    </div>
                    <p className='register'>Didn't have account? <Link to='/register'>Register here.</Link> </p>
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

export default LoginPage;