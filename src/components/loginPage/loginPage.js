import React ,{useState} from 'react'
import './loginPage.css';
import Navbar from '../navBar/navBar';
import { Link } from 'react-router-dom';
import {userLogin} from '../../services/loginService';
import harry from '../../assets/harry.png';


const LoginPage = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [loading,setLoading]=useState(false);
    const [valid,setValid]=useState(false);

    const handleSubmit=async(event)=>{
        event.preventDefault();
        if(email&&password){
            setLoading(true);
        userLogin(email,password)
            .then((res)=>{
                 setTimeout(()=>{
                    setLoading(false)
                    console.log(res.data)
                    setEmail('')
                    setPassword('')
                },2000);     
            })
            .catch(err=>{
                console.log(err.message);
                setLoading(false);
                setEmail('');
                setPassword('');
                setValid(true);
            })
        }
    }

    const clearForm=(event)=>{
        event.preventDefault();
        setEmail('');
        setPassword('');
        
    }
  return (
    <div className='container'>
        <Navbar />
        <img src={harry} alt='harry' className='harry'></img>
       <div className='inner-container'>
            <div className='form-container'>
                <form >
                    <h2>Log In</h2>
                    {valid?
                    <div className='valid'>
                        <h3 >User Not Found !..<span>Please Register..</span></h3>
                    </div>:null}
                    {loading?<div className="loader1"></div>:null}
                    {!valid?<span>
                        <label htmlFor='email'>Email :</label>
                        <input type='email' name="email" required onChange={(e)=>setEmail(e.target.value)} value={email}></input><br/>
                        <label htmlFor='password'>Password :</label>
                        <input type='password' name='password' required onChange={(e)=>setPassword(e.target.value)} value={password}></input><br/>
                        <p className='forgot'><Link to='/forgot'>forgot password ?</Link></p><br/>
                        <div className='button-container'>
                            <button onClick={handleSubmit} disabled={loading} >Submit</button>
                            <button onClick={clearForm}>Clear</button>
                        </div>
                        </span>:null}
                    
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