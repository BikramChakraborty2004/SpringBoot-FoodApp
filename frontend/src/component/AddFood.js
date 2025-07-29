import React from 'react';
import axios from 'axios';
import { useState } from 'react';

function AddFood() {
  let [food, setFood] = useState({
    fid: "",
    fname: "",
    price: ""
  });

  let [msg, setMsg] = useState("");

  const refData = () => {
    setFood({
      fid: "",
      fname: "",
      price: ""
    });
  };

  const addData = () => {
    axios.post("http://localhost:1004/food/add", food)
      .then((res) => {
        console.log(res.data);
        setMsg(res.data);
      })
      .catch((error) => {
        console.log(error);
        alert('SOMETHING WENT WRONG');
      });
  };

  return (
    <div style={{ width: "60%", margin: "50px auto" }}>
      <h2 className='text-primary'>ADDING FOOD</h2>
      <input type="text" className='form-control' placeholder='Enter the Food id' value={food.fid} onChange={(event) => setFood({ ...food, fid: event.target.value })} />
      <input type="text" className='form-control' placeholder='Enter the Food name' value={food.fname} onChange={(event) => setFood({ ...food, fname: event.target.value })} />
      <input type="text" className='form-control' placeholder='Enter the Food price' value={food.price} onChange={(event) => setFood({ ...food, price: event.target.value })} />
      <button className='btn btn-outline-primary' onClick={addData}>ADD</button>
      <button className='btn btn-outline-secondary' onClick={refData}>REFRESH</button>
      <h3 className='text-success'>{msg}</h3>
    </div>
  );
}

export default AddFood;
