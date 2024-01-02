import React, { useState, useEffect } from "react";

import { useAuth } from "../../login/AuthContext";
import axios from "axios";

import MemberService from "./service/MemberService";

const Members = () => {
  const [members, setMembers] = useState([]);
  const [caregivers, setCaregivers] = useState([]);
  const { user } = useAuth();
  const [selectedCaregivers, setSelectedCaregivers] = useState(null);

  useEffect(() => {
    MemberService.getAllMembers()
      .then((res) => {
        // Initialize selectedRiders state based on the fetched orders
        const initialSelectedCaregivers = {};
        res.data.forEach((member) => {
          initialSelectedCaregivers[member.id] = ""; // Initially, no rider is selected
        });
        setSelectedCaregivers(initialSelectedCaregivers);

        setMembers(res.data);
      })
      .catch((error) => console.error("Error fetching member:", error));

    axios
      .get("http://localhost:8080/caregiver-api/caregivers")
      .then((res) => setCaregivers(res.data))
      .catch((error) => console.error("Error fetching caregivers:", error));
  }, []); // Empty dependency array to run the effect only once on mount

  const handleCaregiverChange = (memberId, caregiverId) => {
    setSelectedCaregivers((prevState) => ({
      ...prevState,
      [memberId]: caregiverId,
    }));
  };

  const handleAssignCaregiverClick = (memberId) => {
    const selectedCaregiverId = selectedCaregivers[memberId];

    // Make an API call to assign the selected rider to the order
    // You need to implement the OrderService.assignRiderToOrder method
    MemberService.assignCaregiver(memberId, selectedCaregiverId)
      .then((res) => {
        console.log("API Response:", res.data);
        // Update the local state with the new data (include assigned rider)
        setMembers((prevMembers) => {
          return prevMembers.map((member) => {
            if (member.id === memberId) {
              // Assuming your API response includes the riderName
              return { ...member, caregiverName: res.data };
            }
            return member;
          });
        });

        console.log(`Caregiver assigned to order ${memberId}:`, res.data);
        alert("Assigned Caregiver Successfully!");
        // Optionally, you can update the state or show a success message to the user
      })
      .catch((error) => {
        console.error(`Error assigning Caregiver to order ${memberId}:`, error);
        // Handle the error (e.g., show an error message to the user)
      });
  };

  return (
    <div className="container-fluid">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Member Name</th>
            <th>Member Email</th>
            <th>Member Address</th>
            <th>Caregiver Name</th>
            <th>Assign caregiver</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id}>
              <td>{member.id}</td>
              <td>{member.username}</td>
              <td>{member.email}</td>
              <td>{member.memberAddress}</td>
              <td>{member.caregiverName}</td>
              <td>
                <select
                  value={setSelectedCaregivers[member.id]}
                  onChange={(e) =>
                    handleCaregiverChange(member.id, e.target.value)
                  }
                >
                  <option value="">Select Caregiver</option>
                  {/* Populate dropdown options with riders */}
                  {caregivers.map((caregiver) => (
                    <option key={caregiver.id} value={caregiver.id}>
                      {caregiver.username}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <button
                  type="button"
                  className="btn green "
                  onClick={() => handleAssignCaregiverClick(member.id)}
                >
                  Assign Caregiver
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Members;
