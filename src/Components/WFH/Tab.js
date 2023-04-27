import React from "react";
import { NavLink } from "react-router-dom";
function Tab() {
  return (
    <nav
      className="d-flex"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <NavLink to="/dashboard/getRequest" className="text-decoration-none">
        <p className="text-start">Your Request</p>
      </NavLink>
      <NavLink to="/dashboard/viewRequest" className="text-decoration-none">
        <p className="text-start ms-3">Reporting's Request</p>
      </NavLink>

      <NavLink to="/dashboard/leave" className="text-decoration-none">
        <p className="ms-3">Add Request</p>
      </NavLink>
    </nav>
  );
}

export default Tab;
