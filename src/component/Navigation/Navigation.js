import React, { useState } from 'react';
import './Navigation.css';
import {data} from '../../constants';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {isOpen ? 'Close' : 'Open'}
      </button>
      <nav className="sidebar-nav">
        {/* Add your navigation links here */}
        {data.items.map((item)=>( <a href="#">{item}</a>))}
      </nav>
    </div>
  );
};

export default Sidebar;
