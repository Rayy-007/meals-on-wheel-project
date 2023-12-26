
import React, { useState, useEffect } from "react";
import { useAuth } from "../../login/AuthContext";
import axios from "axios";


const Caregivers = () => {
  const [partners, setpartners] = useState([]);
  const { user } = useAuth();



  useEffect(() => {
      axios.get(`http://localhost:8080/admin/partnerGetAll`)
      .then(res => setpartners(res.data))
      .catch(error => console.error('Error fetching caregivers:', error));
  }, []); // Empty dependency array to run the effect only once on mount



  return (
    <div className="container-fluid">
         <table className="table">
         <thead>
              <tr>
                <th>ID</th>
                <th>Partner Name</th>
                <th>Partner Email</th>
                <th>Password</th>
                <th>Partner Company Name</th>
                <th>Partner Company Description</th>
                <th>Partner COmpany Location</th>
     
              </tr>
            </thead>
            <tbody>
              {partners.map(partner => (
                <tr key={partner.id}>
                  <td>{partner.id}</td>
                  <td>{partner.username}</td>
                  <td>{partner.email}</td>
                  <td>{partner.password}</td>
                  <td>{partner.companyName}</td>
                  <td>{partner.companyDes}</td>
                  <td>{partner.companyLocation}</td>
                

                </tr>
              ))}
            </tbody>
          </table>
    </div>
  );
};

export default Caregivers;

import React from "react";

export default function Parners() {
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
        <h2>partners</h2>
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
