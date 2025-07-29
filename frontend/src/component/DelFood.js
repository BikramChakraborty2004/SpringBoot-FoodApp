import React, { useState } from 'react';
import axios from 'axios';

function DelFood() {
  let [fid, setFid] = useState("");
  let [msg, setMsg] = useState("");

  const deleteData = () => {
    if (!fid) {
      alert("Please enter a valid Food ID!");
      return;
    }

    axios.delete(`http://localhost:1004/food/del/${fid}`)
      .then((res) => {
        console.log(res.data);
        setMsg(res.data);
        setFid(""); // Clear input
      })
      .catch((error) => {
        console.log(error);
        alert("SOMETHING WENT WRONG");
      });
  };

  return (
    <div style={{ width: "60%", margin: "50px auto" }}>
      <h2 className="text-primary">DELETE FOOD</h2>
      <input type="text" className="form-control" placeholder="Enter the food id to delete"
        value={fid} onChange={(event) => setFid(event.target.value)} />
      <button className="btn btn-outline-danger mt-2" onClick={deleteData}>DELETE</button>
      <h3 className='text-danger'>{msg}</h3>
    </div>
  );
}

export default DelFood;
