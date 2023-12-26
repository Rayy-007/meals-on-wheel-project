
import React, { useState, useEffect } from "react";
import { useAuth } from "../../login/AuthContext";
import axios from "axios";


const Parners = () => {
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

export default Parners;

