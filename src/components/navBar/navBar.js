import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import './navBar.css';


const Navbar = () => {
  return (
    <div className='container1'>
            <div className='left'>
                <img src={logo} alt='logo'></img>
                <h2>HOGWARDS</h2>
            </div>
            <div className='right'>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/register'>Register</Link></li>
                    <li><Link to='/gallery'>Gallery</Link></li>
                </ul>
            </div>
    </div>
  )
}

export default Navbar;