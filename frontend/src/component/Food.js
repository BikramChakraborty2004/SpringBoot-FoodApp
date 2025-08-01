import React from 'react';
import "./Food.css";
import { Link, Outlet } from 'react-router-dom';

function Food() {
  return (
    <div className='pConatainer'>
      <div className='lContainer'>
        <Link to="addfood">ADDFOOD</Link>
        <Link to="deletefood">DELETEFOOD</Link>
        <Link to="updfood">UPDATEFOOD</Link>
        <Link to="sfood">SEARCHFOOD</Link>
        <Link to="flist">FOODLIST</Link>
      </div>
      <div className='rContainer'>
        <Outlet />
      </div>
    </div>
  );
}

export default Food;
