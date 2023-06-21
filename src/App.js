import React from 'react';
import './App.css';
// import { LoginContext, RealDataContext } from './Context/LoginContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './Components/Login/SignIn';
import SignUp from './Components/SignUp/SignUp';
import Profile from './Components/Profile/Profile';
import GetProfile from './Components/Profile/getProfile';
import AdminEmployeeTable from './Components/AdminEmployeeTable/AdminEmployeeTable';
import Dashboard from './Components/Dashboard/Dashboard';
import { ProtectRoute, AdminProtect } from './Service/ProtectRoute';
import TimesheetForm from './Components/Timesheet/TimesheetForm';
import { RedirectRoute, AdminRedirect } from './Service/RedirectRoute';
import ErrorPage from './Components/ErrorComponet/ErrorPage';
import LeaveForm from './Components/Leaves/leaveform';
import Home from './Components/Dashboard/home';
import Gethierarchy from './Components/Profile/Gethierarchy';
import GetRequest from './Components/WFH/GetRequest';
import ViewRequest from './Components/WFH/ViewRequest';
import WFHform from './Components/WFH/WFHform';
import EditRequest from './Components/WFH/EditRequest';
import GetUserTimesheet from './Components/Timesheet/GetUserTimesheet';
import GetRmTimesheet from './Components/Timesheet/GetRmTimesheet';
import EditReporingTimeSheet from './Components/Timesheet/EditReportingTimeSheet';
import SearchProfile from './Components/Profile/SearchProfile';
// import DescriptionForm from './Components/Timesheet/descriptionForm';
import AdminLogin from './Components/AdminLogin/AdminLogin';
import AdminSignUp from './Components/AdminSignUp/AdminSignUp';
import AdminDashboard from './Components/AdminDashboard/AdminDashboard';
import AdminHome from './Components/AdminDashboard/adminHome';
import AdminUserProfile from './Components/AdminUserProfile/AdminUserProfile';
import UserProfile from './Components/AdminUserHierarchy/userProfile';
import Hierarchy from './Components/AdminUserHierarchy/hierarchy';
import SuccessMessage from './Components/Message/successmessage';
import AdminRequest from './Components/AdminRequest/AdminRequest';
import AdminTimesheet from './Components/AdminTimesheet/AdminTimesheet';

// import UserRoutes from './Routes/userRoutes';
// import AdminRoutes from './Routes/adminRoutes';

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route element={<AdminRedirect />} path='/adminlogin'>
						<Route element={<AdminLogin />} path='/adminlogin'></Route>
					</Route>

					<Route element={<AdminSignUp />} path='/adminsignup'></Route>

					<Route element={<AdminProtect />} path='/admindashboard'>
						<Route element={<AdminDashboard />} path='/admindashboard'>
							<Route element={<AdminHome />} path='' />
							<Route element={<AdminUserProfile />} path='search-user/:id' />
							<Route element={<UserProfile />} path='user-profile' />
							<Route element={<AdminRequest />} path='requests' />
							<Route element={<AdminTimesheet />} path='timesheets' />
							<Route element={<Hierarchy />} path='get-hierarchy' />

							<Route element={<Home />} path='' />
						</Route>
					</Route>

					<Route element={<RedirectRoute />} path='/'>
						<Route element={<SignIn />} path='/'></Route>
					</Route>
					<Route element={<SignUp />} path='/signup'></Route>
					<Route element={<AdminEmployeeTable />} path='/table'></Route>
					{/* <Route element={<GetUserTimesheet/>} path="/getTimesheet"></Route>
          <Route element={<GetRmTimesheet/>} path="/viewTime"></Route>
          <Route element={<EditReporingTimeSheet/>} path="/editTime"></Route> */}

					{/* for hierarchy testing */}

					<Route element={<ProtectRoute />} path='/dashboard'>
						<Route element={<Dashboard />} path='/dashboard'>
							<Route element={<Home />} path='' />
							<Route element={<LeaveForm />} path='leave' />
							<Route element={<GetRequest />} path='getRequest' />
							<Route element={<EditRequest />} path='editrequest/:id' />
							<Route element={<ViewRequest />} path='viewRequest' />
							<Route element={<GetProfile />} path='getProfile/' />
							<Route element={<SearchProfile />} path='searchprofile/:id' />
							<Route element={<Profile />} path='profile' />
							<Route element={<GetUserTimesheet />} path='getTimesheet' />
							<Route element={<GetRmTimesheet />} path='viewTime' />
							<Route element={<EditReporingTimeSheet />} path='editTime/:id' />
							<Route element={<TimesheetForm />} path='timesheetform'></Route>
							<Route element={<Gethierarchy />} path='get-hierarchy' />
						</Route>
					</Route>

					<Route element={<ProtectRoute />} path='/leaverequest'>
						<Route element={<WFHform />} path='/leaverequest'></Route>
					</Route>

					{/* <Route element={<DescriptionForm />} path="/testkaruna"></Route> */}

					<Route element={<SuccessMessage />} path='/success'></Route>
					<Route element={<ErrorPage />} path='*'></Route>
				</Routes>
			</Router>

			<ToastContainer />
		</>
	);
}

export default App;
