
import React, { useState, useEffect } from "react";
import { useAuth } from "../../login/AuthContext";
import axios from "axios";


const Caregivers = () => {
  const [caregivers, setcaregivers] = useState([]);
  const { user } = useAuth();




  useEffect(() => {
      axios.get(`http://localhost:8080/admin/volunteerGetall`)
      .then(res => setcaregivers(res.data))
      .catch(error => console.error('Error fetching caregivers:', error));
  }, []); // Empty dependency array to run the effect only once on mount



  return (
    <div className="container-fluid">
         <table className="table">
         <thead>
              <tr>
                <th>ID</th>
                <th>Caregiver Name</th>
                <th>Caregivers Email</th>
                <th>Password</th>
     
              </tr>
            </thead>
            <tbody>
              {caregivers.map(caregiver => (
                <tr key={caregiver.id}>
                  <td>{caregiver.id}</td>
                  <td>{caregiver.username}</td>
                  <td>{caregiver.email}</td>
                  <td>{caregiver.password}</td>
                

                </tr>
              ))}
            </tbody>
          </table>
    </div>
  );
};

export default Caregivers;

import React from "react";

export default function Volunteers() {
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
        <h2>Volunteers</h2>
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

