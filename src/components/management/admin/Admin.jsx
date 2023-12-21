import React from "react";
import "./admin.css";
import { Link, NavLink, Outlet } from "react-router-dom";

export default function () {
  const activeStyle = {
    backgroundColor: "#007bff",
    color: "#fff",
  };

  return (
    <div className="container">
      <div className="title">
        <h2>Admin Dashboard</h2>
        <p style={{ fontWeight: 500 }}>
          All Member, Care Givers, Volunteer, Partner, Rider And Donator Data
          Are Shown Below.
        </p>
      </div>
      <div className="flex-btn">
        <nav className="admin-btns">
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : null)}
            className="button "
            to="member"
          >
            Members
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : null)}
            className="button "
            to="caregiver"
          >
            Care Givers
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : null)}
            className="button "
            to="volunteer"
          >
            Volunteers
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : null)}
            className="button "
            to="partner"
          >
            Partners
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : null)}
            className="button "
            to="donator"
          >
            Dontators
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : null)}
            className="button "
            to="rider"
          >
            Riders
          </NavLink>
        </nav>
      </div>

      <Outlet />
    </div>
  );
}
