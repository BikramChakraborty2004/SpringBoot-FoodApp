import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import "./Nav.css";

function Nav() {
  return (
    <div className='navContainer'>
      <div className='lftContainer'>
        <h2>MYAPP</h2>
      </div>
      <div className='rtContainer'>
        <Link to="/nav/food/addfood">ADD FOOD</Link>
        <Link to="/nav/food/deletefood">DELETE FOOD</Link>
        <Link to="/nav/food/updfood">UPDATE FOOD</Link>
        <Link to="/nav/food/sfood">SEARCH FOOD</Link>
        <Link to="/nav/food/flist">FOOD LIST</Link>
      </div>

      {/* Required to render nested routes */}
      <Outlet />
    </div>
  );
}

export default Nav;
