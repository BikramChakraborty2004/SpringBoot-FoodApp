import React from 'react';
import axios from 'axios';
import { useState } from 'react';

function UpdFood() {
  let [id, setFid] = useState("");
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

  const updateData = () => {
    axios.put(`http://localhost:1004/food/update/${id}`, food)
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
    <div style={{ width: "30%", margin: "50px auto" }}>
      <h2 className='text-primary'>UPDATING FOOD</h2>
      <input type="text" className='form-control' placeholder='Enter the Food id' value={id} onChange={(event) => setFid(event.target.value)} />
      <input type="text" className='form-control' placeholder='Enter the Food name' value={food.fname} onChange={(event) => setFood({ ...food, fname: event.target.value })} />
      <input type="text" className='form-control' placeholder='Enter the Food price' value={food.price} onChange={(event) => setFood({ ...food, price: event.target.value })} />
      <button className='btn btn-outline-primary' onClick={updateData}>UPDATE</button>
      <button className='btn btn-outline-secondary' onClick={refData}>REFRESH</button>
      <h3 className='text-success'>{msg}</h3>
    </div>
  );
}

export default UpdFood;
