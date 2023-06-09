import { Routes, Route } from "react-router-dom";
import SignIn from "../Components/Login/SignIn";
import { RedirectRoute } from "../Service/RedirectRoute";
import SignUp from "../Components/SignUp/SignUp";
import Profile from "../Components/Profile/Profile";
import GetProfile from "../Components/Profile/getProfile";
import EmployeeTable from "../Components/EmployeeTable/EmployeeTable";
import Dashboard from "../Components/Dashboard/Dashboard";
import { ProtectRoute } from "../Service/ProtectRoute";
import TimesheetForm from "../Components/Timesheet/TimesheetForm";
import LeaveForm from "../Components/Leaves/leaveform";
import Home from "../Components/Dashboard/home";
import Gethierarchy from "../Components/Profile/Gethierarchy";
import GetRequest from "../Components/WFH/GetRequest";
import ViewRequest from "../Components/WFH/ViewRequest";
import WFHform from "../Components/WFH/WFHform";
import EditRequest from "../Components/WFH/EditRequest";
import GetUserTimesheet from "../Components/Timesheet/GetUserTimesheet";
import GetRmTimesheet from "../Components/Timesheet/GetRmTimesheet";
import EditReporingTimeSheet from "../Components/Timesheet/EditReportingTimeSheet";
import SearchProfile from "../Components/Profile/SearchProfile";
import ErrorPage from "../Components/ErrorComponet/ErrorPage";

const UserRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<RedirectRoute />} path="/">
          <Route element={<SignIn />} path="/"></Route>
        </Route>
        <Route element={<SignUp />} path="/signup"></Route>
        <Route element={<EmployeeTable />} path="/table"></Route>

        {/* for hierarchy testing */}

        <Route element={<ProtectRoute />} path="/dashboard">
          <Route element={<Dashboard />} path="/dashboard">
            <Route element={<Home />} path="" />
            <Route element={<LeaveForm />} path="leave" />
            <Route element={<GetRequest />} path="getRequest" />
            <Route element={<EditRequest />} path="editrequest/:id" />
            <Route element={<ViewRequest />} path="viewRequest" />
            <Route element={<GetProfile />} path="getProfile/" />
            <Route element={<SearchProfile />} path="searchprofile/:id" />
            <Route element={<Profile />} path="profile" />
            <Route element={<GetUserTimesheet />} path="getTimesheet" />
            <Route element={<GetRmTimesheet />} path="viewTime" />
            <Route element={<EditReporingTimeSheet />} path="editTime/:id" />
            <Route element={<TimesheetForm />} path="timesheetform"></Route>
            <Route element={<Gethierarchy />} path="get-hierarchy/:id" />
          </Route>
        </Route>

        <Route element={<ProtectRoute />} path="/leaverequest">
          <Route element={<WFHform />} path="/leaverequest"></Route>
        </Route>
      </Routes>
    </>
  );
};

export default UserRoutes;
