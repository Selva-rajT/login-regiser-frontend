import React from 'react';
import './homePage.css';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="container-outside">
      <div className="container">
        <h1>HOGWARDS</h1>
        <h2>School of Witchcraft and Wizardry</h2>
        <button onClick={navigateToLogin} className="button">Login Here</button>
      </div>
    </div>
  );
};

export default HomePage;
