import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NavClient from './NavClient';

function Billing() {
  let [user, setUser] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:1004/order/billing")
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch((error) => {
        alert("SOMETHING WENT WRONG FETCHING DATA");
        console.log(error);
      });
  }, []);

  return (
    <div>
      {
        user.length > 0 ?
          <div style={{ width: "90%", margin: "50px auto" }}>
            <NavClient />
            <table className='table table-bordered table-hover table-striped'>
              <thead className='table-dark'>
                <tr>
                  <th>ORDER ID</th>
                  <th>ORDER DATE</th>
                  <th>FOOD ID</th>
                  <th>FOOD NAME</th>
                  <th>QUANTITY</th>
                  <th>PRICE</th>
                  <th>NET PRICE</th>
                  <th>USERNAME</th>
                </tr>
              </thead>
              <tbody>
                {
                  user.map((row, index) => (
                    <tr key={index}>
                      <td>{row[0]}</td>
                      <td>{row[1]}</td>
                      <td>{row[2]}</td>
                      <td>{row[3]}</td>
                      <td>{row[4]}</td>
                      <td>{row[5]}</td>
                      <td>{row[6]}</td>
                      <td>{row[7]}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
          : <h2 style={{ color: 'red' }}>NO DATA FOUND</h2>
      }
    </div>
  );
}

export default Billing;
