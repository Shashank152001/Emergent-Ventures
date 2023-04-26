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
import WFHform from "./Components/WFH/WFHform";
import TimesheetForm from "./Components/Timesheet/TimesheetForm";
import RedirectRoute from "./Service/RedirectRoute";
import ErrorPage from "./Components/ErrorComponet/ErrorPage";
import LeaveForm from "./Components/Leaves/leaveform";
import Home from "./Components/Dashboard/home";
import Chart from "./chart";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<RedirectRoute />} path="/">
            <Route element={<SignIn />} path="/"></Route>
          </Route>
          <Route element={<SignUp />} path="/signup"></Route>
          <Route element={<WFHform />} path="/WFHform"></Route>
          <Route element={<EmployeeTable />} path="/table"></Route>
          <Route element={<TimesheetForm />} path="/Timesheetform"></Route>
          {/* for hierarchy testing */}
          <Route
            element={
              <Chart
                nodes={[
                 
                  {
                    id: 1,
                    // pid: 0,
                    name: "Denny Curtis",
                    title: "CEO",
                    img: "https://cdn.balkan.app/shared/2.jpg",
                   
                    
                  },

                  {
                    id: 2,
                    pid: 1,
                    // stpid: 1,
                    name: "Ashley Barnett",
                    title: "Sales Manager",
                    img: "https://cdn.balkan.app/shared/3.jpg",
                    tags: ["node-with-subtrees"],
                  },
                  {
                    id: 3,
                    // pid: 1,
                    stpid: 2,
                    name: "Caden Ellison",
                    title: "Dev Manager",
                    img: "https://cdn.balkan.app/shared/4.jpg",
                  },
                  {
                    id: 4,
                    // pid: 1,
                    stpid: 2,
                    name: "Elliot Patel",
                    title: "Sales",
                    img: "https://cdn.balkan.app/shared/5.jpg",
                  },
                  {
                    id: 5,
                    // pid: 1,
                    stpid: 2,
                    name: "Lynn Hussain",
                    title: "Sales",
                    img: "https://cdn.balkan.app/shared/6.jpg",
                  },
                  {
                    id: 6,
                    // pid: 1,
                    stpid: 2,
                    name: "Tanner May",
                    title: "Developer",
                    img: "https://cdn.balkan.app/shared/7.jpg",
                  },
                  {
                    id: 7,
                    // pid: 1,
                    stpid: 2,
                    name: "Fran Parsons",
                    title: "Developer",
                    img: "https://cdn.balkan.app/shared/8.jpg",
                  },
                ]}
              />
            }
            path="/chart"
          ></Route>

          <Route element={<ProtectRoute />} path="/dashboard">
            <Route element={<Dashboard />} path="/dashboard">
              <Route element={<Home />} path="" />
              <Route element={<LeaveForm />} path="leave" />
              <Route element={<GetProfile />} path="getProfile" />
              <Route element={<Profile />} path="profile" />
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
