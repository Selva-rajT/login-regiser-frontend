import React ,{useState}from 'react'
import { Link ,useNavigate} from 'react-router-dom';
import './registerPage.css';
import Navbar from '../navBar/navBar';
import hermoine from '../../assets/hermoine.png';
import { userRegister } from '../../services/registerService';
const Registerpage= () => {
    const navigate=useNavigate();
    const [loading,setLoading]=useState(false);
    const [details,setDetails]=useState({
        username:'',
        email:'',
        password:'',
        rpassword:''
    })
    const initialState=details;

    const setValues = (e) => {
        const { name, value } = e.target;
        setDetails((prevDetails) => ({
          ...prevDetails,
          [name]: value,
        }));
      };
      
    const handleSubmit=(event)=>{
        event.preventDefault();
        if(details.username&&details.email&&details.password&&details.rpassword&&details.password===details.rpassword){
            setLoading(true);
            userRegister(details)
                .then(res=>{
                    setDetails(initialState);
                    setLoading(false);
                    console.log(res.data);
                    navigate('/login');  
                })
                .catch(err=>{
                    setDetails(initialState);
                    setLoading(false);
                })
        }
        
    }

  return (
    <div className='container'>
        <Navbar />
        <img src={hermoine} alt='harry' className='harry'></img>
        <div className='inner-container'>
            {loading?<div className="loader"></div>:null}   
            <div className='form-container'>
                    
                    <form >
                        <h2>Register</h2>
                            <label htmlFor='usernae'>User Name :</label><br/>
                            <input type='text' name='username' required onChange={setValues} value={details.username}></input><br/>
                            <label htmlFor='email'>Email :</label><br/>
                            <input type='email' name="email" required onChange={setValues} value={details.email}></input><br/>
                            <label htmlFor='password'>Password :</label><br/>
                            <input type='password' name='password' required onChange={setValues} value={details.password}></input><br/>
                            <label htmlFor='rpassword'>Repeat-Password :</label><br/>
                            <input type='password' name='rpassword' required onChange={setValues} value={details.rpassword}></input><br/>
                        <div className='button-container'>
                            <button onClick={(e)=>handleSubmit(e)} disabled={loading}>Submit</button>
                            <button onClick={()=>setDetails(initialState)}>Clear</button>
                        </div>
                        <p className='register'>Already have account? <Link to='/login'>Login here.</Link> </p>
                    </form>
                </div>  
                <div className='quote-container'>
                    <div className='quote'>
                        {/* <p>"I hope you're pleased with yourselves. We could all have been killed — or worse, expelled. Now if you don't mind, I'm going to bed." ― Hermione Granger</p> */}
                    </div>
                </div>  
        </div>
                  
       </div>
  )
}

export default Registerpage;