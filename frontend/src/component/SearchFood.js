import React, { useState } from 'react';
import axios from 'axios';
import Nav from './Nav';

function SearchFood() {
  let [id, setFid] = useState("");
  let [food, setFood] = useState(null);
  let [msg, setMsg] = useState("");

  const searchData = () => {
    if (!id) {
      alert("Please enter a valid food ID");
      return;
    }

    axios.get(`http://localhost:1004/food/fetch/${id}`)
      .then((res) => {
        if (res.data) {
          setFood(res.data);
          setMsg("");
        } else {
          setFood(null);
          setMsg("No data found.");
        }
      })
      .catch((error) => {
        console.error(error);
        setFood(null);
        setMsg("Something went wrong while searching for the food.");
      });
  };

  return (
    <div style={{ width: "60%", margin: "50px auto", textAlign: "center" }}>
      <Nav />
      <h2 className="text-danger">SEARCH FOOD ITEM</h2>

      <input
        className="form-control mb-3"
        type="text"
        placeholder="ENTER FOOD ID TO SEARCH"
        value={id}
        onChange={(event) => setFid(event.target.value)}
      />
      <button className="btn btn-outline-danger mb-3" onClick={searchData}>SEARCH</button>

      <h3 className="text-warning">{msg}</h3>

      {food && (
        <div style={{ width: "80%", margin: "20px auto" }}>
          <table className="table table-bordered table-hover table-striped">
            <thead className="table-dark">
              <tr>
                <th>FOOD ID</th>
                <th>FOOD NAME</th>
                <th>PRICE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{food.fid}</td>
                <td>{food.fname}</td>
                <td>{food.price}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default SearchFood;
