import React from 'react';
import axios from 'axios';
import { useState } from 'react';

function Register() {
  let [register, setRegister] = useState({
    uname: "",
    pass: "",
    nm: "",
    phno: "",
    email: ""
  });

  let [msg, setMsg] = useState("");

  const refData = () => {
    setRegister({
      uname: "",
      pass: "",
      nm: "",
      phno: "",
      email: "",
    });
  };

  const addData = () => {
    axios.post("http://localhost:1004/register/add", register)
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
    <div style={{ width: '30%', margin: '50px auto' }}>
      <h2 className='text-white bg-dark' style={{ textDecoration: 'underline' }}>Registration Form</h2>
      <input type="text" className='form-control' placeholder='Enter the Username' value={register.uname} onChange={(event) => { setRegister({ ...register, uname: event.target.value }) }} />
      <input type="password" className='form-control' placeholder='Enter the Password' value={register.pass} onChange={(event) => { setRegister({ ...register, pass: event.target.value }) }} />
      <input type="text" className='form-control' placeholder='Enter the Name' value={register.nm} onChange={(event) => { setRegister({ ...register, nm: event.target.value }) }} />
      <input type="text" className='form-control' placeholder='Enter the Phone no' value={register.phno} onChange={(event) => { setRegister({ ...register, phno: event.target.value }) }} />
      <input type="text" className='form-control' placeholder='Enter the Email' value={register.email} onChange={(event) => { setRegister({ ...register, email: event.target.value }) }} />
      <button className='btn btn-outline-secondary' onClick={addData}>REGISTER</button>
      <button className='btn btn-outline-danger' onClick={refData}>REFRESH</button>
      <h3 className='text-primary'>{msg}</h3>
    </div>
  );
}

export default Register;
