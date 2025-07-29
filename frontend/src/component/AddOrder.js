import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import NavClient from './NavClient';

function AddOrder() {
  let [order, setOrder] = useState({
    fid: "",
    qty: "",
    uname: ""
  });

  let [msg, setMsg] = useState("");

  const addData = () => {
    axios.post("http://localhost:1004/order/add", order)
      .then((res) => {
        console.log(res.data);
        setMsg(res.data);
        refreshData();
      })
      .catch((error) => {
        console.log(error);
        alert("SOMETHING WENT WRONG FETCHING THE DATA");
      });
  };

  const refreshData = () => {
    setOrder({
      fid: "",
      qty: "",
      uname: ""
    });
  };

  return (
    <div style={{ width: "60%", margin: "50px auto" }}>
      <NavClient />
      <h2 className='text-primary'>ADD ORDER</h2>
      <input
        className='form-control'
        type="text"
        placeholder='ENTER THE FOOD ID'
        value={order.fid}
        onChange={(event) => setOrder({ ...order, fid: event.target.value })}
      />
      <input
        className='form-control'
        type="text"
        placeholder='ENTER THE FOOD QUANTITY'
        value={order.qty}
        onChange={(event) => setOrder({ ...order, qty: event.target.value })}
      />
      <input
        className='form-control'
        type="text"
        placeholder='ENTER THE USERNAME'
        value={order.uname}
        onChange={(event) => setOrder({ ...order, uname: event.target.value })}
      />
      <button className='btn btn-outline-primary mt-2' onClick={addData}>ADD</button>
      <button className='btn btn-outline-secondary mt-2 ms-2' onClick={refreshData}>REFRESH</button>
      <h3 className='text-warning'>{msg}</h3>
    </div>
  );
}

export default AddOrder;
