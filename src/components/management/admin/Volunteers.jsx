
import React, { useState, useEffect } from "react";
import { useAuth } from "../../login/AuthContext";
import axios from "axios";


const Volunteers = () => {
  const [volunteers, setVolunteers] = useState([]);
  const { user } = useAuth();




  useEffect(() => {
      axios.get(`http://localhost:8080/admin/volunteerGetall`)
      .then(res => setVolunteers(res.data))
      .catch(error => console.error('Error fetching caregivers:', error));
  }, []); // Empty dependency array to run the effect only once on mount



  return (
    <div className="container-fluid">
         <table className="table">
         <thead>
              <tr>
                <th>ID</th>
                <th>Volunteer Name</th>
                <th>Volunteer Email</th>
                <th>Password</th>
     
              </tr>
            </thead>
            <tbody>
              {volunteers.map(volunteer => (
                <tr key={volunteer.id}>
                  <td>{volunteer.id}</td>
                  <td>{volunteer.username}</td>
                  <td>{volunteer.email}</td>
                  <td>{volunteer.password}</td>
                

                </tr>
              ))}
            </tbody>
          </table>
    </div>
  );
};

export default Volunteers;
