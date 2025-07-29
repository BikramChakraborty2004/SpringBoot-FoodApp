import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Nav from './Nav';

function FoodList() {
  let [user, setUser] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:1004/food/fetch")
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
          <div style={{ width: "60%", margin: "50px auto" }}>
            <Nav />
            <table className='table table-bordered table-hover table-striped'>
              <thead className='table-dark'>
                <tr>
                  <td>FOODID</td>
                  <td>FOODNAME</td>
                  <td>PRICE</td>
                </tr>
              </thead>
              <tbody>
                {
                  user.map((element, index) => (
                    <tr key={index}>
                      <td>{element.fid}</td>
                      <td>{element.fname}</td>
                      <td>{element.price}</td>
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

export default FoodList;
