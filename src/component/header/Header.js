import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [name, setName] = useState('hari');
  return (
    <header>
        <div className='curvedHeader'><h1 className="heading">L Fashions</h1>
        <div className='secondCurve'></div></div>
        {name}
        
      <div className="logo">
        <img src="https://cdn5.vectorstock.com/i/1000x1000/40/94/jewelry-shop-logo-round-linear-store-vector-28104094.jpg" alt="Logo" />
      </div>
      
    </header>
  );
};

export default Header;
 