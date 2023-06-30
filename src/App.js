import React,{Suspense,lazy} from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProtectRoute, AdminProtect } from './Service/ProtectRoute';
import { RedirectRoute, AdminRedirect } from './Service/RedirectRoute';
import Loader from './Components/Spinner/Loader';
const SignIn = lazy(()=>import('./Components/Login/SignIn'));
const SignUp = lazy(()=>import('./Components/SignUp/SignUp'));
const AdminLogin = lazy(() => import('./Components/AdminLogin/AdminLogin'));
const AdminSignUp = lazy(() => import('./Components/AdminSignUp/AdminSignUp'));
const Profile = lazy(()=>import('./Components/Profile/Profile'));
const GetProfile = lazy(()=>import('./Components/Profile/getProfile'));
const AdminEmployeeTable = lazy(()=>import('./Components/AdminEmployeeTable/AdminEmployeeTable'));
const Dashboard = lazy(()=>import('./Components/Dashboard/Dashboard'));
const TimesheetForm = lazy(()=>import('./Components/Timesheet/TimesheetForm'));
const ErrorPage = lazy(()=>import('./Components/ErrorComponet/ErrorPage'));
const LeaveForm = lazy(()=>import('./Components/Leaves/leaveform'));
const Home = lazy(() => import('./Components/Dashboard/home'));
const Gethierarchy = lazy(() => import('./Components/Profile/Gethierarchy'));
const GetRequest = lazy(() => import('./Components/WFH/GetRequest'));
const ViewRequest = lazy(() => import('./Components/WFH/ViewRequest'));
const WFHform = lazy(() => import('./Components/WFH/WFHform'));
const EditRequest = lazy(() => import('./Components/WFH/EditRequest'));
const GetUserTimesheet = lazy(() => import('./Components/Timesheet/GetUserTimesheet'));
const GetRmTimesheet = lazy(() => import('./Components/Timesheet/GetRmTimesheet'));
const EditReporingTimeSheet = lazy(() => import('./Components/Timesheet/EditReportingTimeSheet'));
const SearchProfile = lazy(() => import('./Components/Profile/SearchProfile'));
const AdminDashboard = lazy(() => import('./Components/AdminDashboard/AdminDashboard'));
const AdminHome = lazy(() => import('./Components/AdminDashboard/adminHome'));
const AdminUserProfile = lazy(() => import('./Components/AdminUserProfile/AdminUserProfile'));
const UserProfile = lazy(() => import('./Components/AdminUserHierarchy/userProfile.js'));
const Hierarchy = lazy(() => import('./Components/AdminUserHierarchy/hierarchy'));
const SuccessMessage = lazy(() => import('./Components/Message/successmessage'));
const AdminRequest = lazy(() => import('./Components/AdminRequest/AdminRequest'));
const AdminTimesheet = lazy(() => import('./Components/AdminTimesheet/AdminTimesheet'));
const AdminProject = lazy(() => import('./Components/AdminProject/AdminProject'));
const Project = lazy(() => import('./Components/Project/Project'));





function App() {
	return (
		<>
			<Router>
			<Suspense fallback={<Loader/>}>
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
							<Route element={<AdminProject />} path='project-detail' />
							<Route element={<Home />} path='' />
						</Route>
					</Route>

					<Route element={<RedirectRoute />} path='/'>
						<Route element={<SignIn />} path='/'></Route>
					</Route>
					<Route element={<SignUp />} path='/signup'></Route>
					<Route element={<AdminEmployeeTable />} path='/table'></Route>

					<Route element={<ProtectRoute />} path='/dashboard'>
						<Route element={<Dashboard />} path='/dashboard'>
							<Route element={<Home />} path='' />
							<Route element={<LeaveForm />} path='leave' />
							<Route element={<GetRequest />} path='getRequest' />
							<Route element={<EditRequest />} path='editrequest/:id' />
							<Route element={<ViewRequest />} path='viewRequest' />
							<Route element={<GetProfile />} path='getProfile/' />
							<Route element={<Project />} path='project-detail' />
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

					<Route element={<SuccessMessage />} path='/success'></Route>
					<Route element={<ErrorPage />} path='*'></Route>
				</Routes>
				</Suspense>
			</Router>

			<ToastContainer />
		</>
	);
}

export default App;
