import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [register, setRegister] = useState({ uname: '', pass: '' });
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const checkLogin = (uname, pass) => {
    axios.get(`http://localhost:1004/register/login/${uname}/${pass}`)
      .then((res) => {
        console.log('Login response:', res.data);

        if (uname === 'admin' && pass === 'admin') {
          localStorage.setItem('role', 'admin');
          navigate('/food');
        } else if (res.data.toLowerCase().includes('success')) {
          localStorage.setItem('role', 'client');
          navigate('/navclient');
        } else {
          setMsg(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
        alert('SOMETHING WENT WRONG');
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    checkLogin(register.uname, register.pass);
  };

  return (
    <div style={{ width: '30%', margin: '50px auto' }}>
      <h2 className='text-white bg-dark' style={{ textDecoration: 'underline' }}>LOGIN</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className='form-control'
          placeholder='Enter the Username'
          value={register.uname}
          onChange={(e) => setRegister({ ...register, uname: e.target.value })}
        />
        <input
          type="password"
          className='form-control'
          placeholder='Enter the Password'
          value={register.pass}
          onChange={(e) => setRegister({ ...register, pass: e.target.value })}
        />
        <button type="submit" className='btn btn-outline-secondary mt-2'>LOGIN</button>
      </form>
      <h3 className='text-primary mt-3'>{msg}</h3>
    </div>
  );
}

export default Login;
