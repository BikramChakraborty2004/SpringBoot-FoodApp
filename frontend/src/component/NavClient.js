import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function NavClient() {
  return (
    <div className='navContainer'>
      <div className='lftContainer'>
        <h2>FOODAPPCLIENT</h2>
      </div>
      <div className='rtContainer'>
        <Link to="/flistclient">FOODLIST</Link>
        <Link to="/sfoodclient">SEARCH</Link>
        <Link to="/addorder">ADDORDER</Link>
        <Link to="/billing">BILLING</Link>
      </div>
    </div>
  );
}

export default NavClient;
