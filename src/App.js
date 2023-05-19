import React, {useState } from "react";
import "./App.css";
import {LoginContext} from './Context/LoginContext'
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
import Gethierarchy from './Components/Profile/Gethierarchy'
import GetRequest from "./Components/WFH/GetRequest";
import ViewRequest from "./Components/WFH/ViewRequest";
import WFHform from './Components/WFH/WFHform'
import EditRequest from "./Components/WFH/EditRequest";
import GetUserTimesheet from "./Components/Timesheet/GetUserTimesheet";
import GetRmTimesheet from "./Components/Timesheet/GetRmTimesheet";
import EditReporingTimeSheet from "./Components/Timesheet/EditReportingTimeSheet";
import SearchProfile from "./Components/Profile/SearchProfile";


function App() {

  const[profileformdata,setProfileFormdata]=useState({
    name:'',
    profileImage:'',
    userId:''
  })
  
   
  return (
    <>
    <LoginContext.Provider value={{profileformdata,setProfileFormdata}}>
      <Router>
        <Routes>
          <Route element={<RedirectRoute />} path="/">
            <Route element={<SignIn />} path="/"></Route>
            
          </Route>
          <Route element={<SignUp />} path="/signup"></Route>
          <Route element={<EmployeeTable />} path="/table"></Route>
          {/* <Route element={<GetUserTimesheet/>} path="/getTimesheet"></Route>
          <Route element={<GetRmTimesheet/>} path="/viewTime"></Route>
          <Route element={<EditReporingTimeSheet/>} path="/editTime"></Route> */}
         
          {/* for hierarchy testing */}

          <Route element={<ProtectRoute />} path="/dashboard">
            <Route element={<Dashboard />} path="/dashboard">
              
              <Route element={<Home />} path="" />
              <Route element={<LeaveForm />} path="leave" />
              <Route element={<GetRequest />} path="getRequest" />
              <Route element={<EditRequest/>} path="editrequest/:id" />
              <Route element={<ViewRequest />} path="viewRequest" />
              <Route element={<GetProfile />} path="getProfile/" />
              <Route element={<SearchProfile />} path="searchprofile/:id" />
              <Route element={<Profile />} path="profile" />
              <Route element={<GetUserTimesheet/>} path="getTimesheet"/>
              <Route element={<GetRmTimesheet/>} path="viewTime"/>
              <Route element={<EditReporingTimeSheet/>} path="editTime/:id"/>
              <Route element={<TimesheetForm />} path="timesheetform"></Route>
              <Route element={<Gethierarchy/>} path="chart" />
              
            </Route>

          </Route>
            
            
          
          <Route element={<ProtectRoute />} path="/leaverequest">
            <Route element={<WFHform />} path="/leaverequest"></Route>
          </Route>

          <Route element={<ErrorPage />} path="*"></Route>
        </Routes>
      </Router>
      </LoginContext.Provider>
      <ToastContainer />
    </>
  );
}

export default App;