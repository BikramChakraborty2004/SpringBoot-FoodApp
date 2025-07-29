import React from 'react'
import {useNavigate} from 'react-router-dom'
function Home() {
  var navigate=useNavigate();
  return (
    <div>
      <h2>FOOD APP SYSTEM</h2>
      <img src='https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg' height={200} width={200}/>
      <br></br><br></br><br></br>
      <button className='btn btn-outline-warning'
      onClick={()=>{
        navigate("/register")
      }}
      >REGISTER</button>&nbsp; &nbsp;
      <button className='btn btn-outline-danger'
      onClick={()=>{
        navigate("/login")
      }}
      >LOGIN</button>
    </div>
  )
}

export default Home
