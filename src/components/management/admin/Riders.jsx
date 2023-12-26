
import React, { useState, useEffect } from "react";
import { useAuth } from "../../login/AuthContext";
import axios from "axios";


const Caregivers = () => {
  const [riders, setRiders] = useState([]);
  const { user } = useAuth();



  useEffect(() => {
      axios.get(`http://localhost:8080/admin/riderGetAll`)
      .then(res => setRiders(res.data))
      .catch(error => console.error('Error fetching caregivers:', error));
  }, []); // Empty dependency array to run the effect only once on mount



  return (
    <div className="container-fluid">
         <table className="table">
         <thead>
              <tr>
                <th>ID</th>
                <th>Rider Name</th>
                <th>Rider Email</th>
                <th>Password</th>
                <th>DriverLicense</th>

     
              </tr>
            </thead>
            <tbody>
              {riders.map(rider => (
                <tr key={rider.id}>
                  <td>{rider.id}</td>
                  <td>{rider.username}</td>
                  <td>{rider.email}</td>
                  <td>{rider.password}</td>
                  <td>{rider.driverLicense}</td>

                

                </tr>
              ))}
            </tbody>
          </table>
    </div>
  );
};

export default Caregivers;

import React from "react";

export default function Riders() {
  const data = [
    {
      Name: "Mg Mg",
      Email: "Email@gmail.com",
      Address: "Yangon",
      DeliverTime: "6 pm",
      Rider: "Kyaw Kyaw",
    },
    {
      Name: "Mg Mg",
      Email: "Email@gmail.com",
      Address: "Yangon",
      DeliverTime: "6 pm",
      Rider: "Kyaw Kyaw",
    },
    {
      Name: "Mg Mg",
      Email: "Email@gmail.com",
      Address: "Yangon",
      DeliverTime: "6 pm",
      Rider: "Kyaw Kyaw",
    },
    {
      Name: "Mg Mg",
      Email: "Email@gmail.com",
      Address: "Yangon",
      DeliverTime: "6 pm",
      Rider: "Kyaw Kyaw",
    },
    {
      Name: "Mg Mg",
      Email: "Email@gmail.com",
      Address: "Yangon",
      DeliverTime: "6 pm",
      Rider: "Kyaw Kyaw",
    },
    {
      Name: "Mg Mg",
      Email: "Email@gmail.com",
      Address: "Yangon",
      DeliverTime: "6 pm",
      Rider: "Kyaw Kyaw",
    },
    {
      Name: "Mg Mg",
      Email: "Email@gmail.com",
      Address: "Yangon",
      DeliverTime: "6 pm",
      Rider: "Kyaw Kyaw",
    },
  ];

  return (
    <>
      <div className="table">
        <h2>Rider</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Deliver Time</th>
              <th>Rider Name</th>
            </tr>
          </thead>
          <tbody>
            {data.map((memebersInfo) => {
              return (
                <tr>
                  <td>{memebersInfo.Name}</td>
                  <td>{memebersInfo.Email}</td>
                  <td>{memebersInfo.Address}</td>
                  <td>{memebersInfo.DeliverTime}</td>
                  <td>{memebersInfo.Rider}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

