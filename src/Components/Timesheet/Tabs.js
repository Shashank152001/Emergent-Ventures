import React from 'react'
import { NavLink } from "react-router-dom";
function Tabs() {
 return (
    <nav
      className="d-flex"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <NavLink to="/dashboard/getTimesheet" className="text-decoration-none">
        <p className="text-start">Your Timesheet</p>
      </NavLink>
      <NavLink to="/dashboard/viewTime" className="text-decoration-none">
        <p className="text-start ms-3">Reporting's Timesheet</p>
      </NavLink>

      <NavLink to="/dashboard/timesheetform" className="text-decoration-none">
        <p className="ms-3">Add Request</p>
      </NavLink>
    </nav>
  );
}

export default Tabs