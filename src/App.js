import React from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./Components/Login/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import Profile from "./Components/Profile/Profile";
import GetProfile from "./Components/Profile/getProfile";
import EmployeeTable from "./Components/EmployeeTable/EmployeeTable";
import Dashboard from "./Components/Dashboard/Dashboard";
import ProtectRoute from "./Service/ProtectRoute";
import TimesheetForm from "./Components/Timesheet/TimesheetForm";
import RedirectRoute from "./Service/RedirectRoute";
import ErrorPage from "./Components/ErrorComponet/ErrorPage";
import LeaveForm from "./Components/Leaves/leaveform";
import Home from "./Components/Dashboard/home";
import Chart from "./Components/Profile/chart";
import GetRequest from "./Components/WFH/GetRequest";
import ViewRequest from "./Components/WFH/ViewRequest";
import WFHform from './Components/WFH/WFHform'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<RedirectRoute />} path="/">
            <Route element={<SignIn />} path="/"></Route>
          </Route>
          <Route element={<SignUp />} path="/signup"></Route>
          <Route element={<EmployeeTable />} path="/table"></Route>
          <Route element={<TimesheetForm />} path="/Timesheetform"></Route>
          {/* for hierarchy testing */}

          <Route element={<ProtectRoute />} path="/dashboard">
            <Route element={<Dashboard />} path="/dashboard">
              <Route element={<Home />} path="" />
              <Route element={<LeaveForm />} path="leave" />
              <Route element={<GetRequest />} path="getRequest" />
              <Route element={<ViewRequest />} path="viewRequest" />
              <Route element={<GetProfile />} path="getProfile" />
              <Route element={<Profile />} path="profile" />
              <Route element={<Chart />} path="chart" />
            </Route>
          </Route>
            
          
          <Route element={<ProtectRoute />} path="/leaverequest">
            <Route element={<WFHform />} path="/leaverequest"></Route>
          </Route>

          <Route element={<ErrorPage />} path="*"></Route>
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
