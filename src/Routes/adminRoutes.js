import {Routes, Route } from 'react-router-dom';
import {AdminProtect } from '../Service/ProtectRoute';
import {AdminRedirect } from '../Service/RedirectRoute';
import Gethierarchy from '../Components/Profile/Gethierarchy';
import AdminLogin from '../Components/AdminLogin/AdminLogin';
import AdminSignUp from '../Components/AdminSignUp/AdminSignUp';
import AdminDashboard from '../Components/AdminDashboard/AdminDashboard';
import AdminHome from '../Components/AdminDashboard/adminHome';
import AdminUserProfile from '../Components/AdminUserProfile/AdminUserProfile';
import ErrorPage from '../Components/ErrorComponet/ErrorPage';


const AdminRoutes = ()=>{

    return (
        <>
        <Routes>
            <Route element={<AdminRedirect />} path='/adminlogin'>
						<Route element={<AdminLogin />} path='/adminlogin'></Route>
					</Route>

					<Route element={<AdminSignUp />} path='/adminsignup'></Route>

					<Route element={<AdminProtect />} path='/admindashboard'>
						<Route element={<AdminDashboard />} path='/admindashboard'>
							<Route element={<AdminHome />} path='' />
							<Route element={<AdminUserProfile />} path='search-user/:id' />
							<Route element={<Gethierarchy />} path='get-hierarchy/:id' /> 
							
					</Route>
			</Route>
            {/* <Route element={<ErrorPage />} path='*'></Route> */}
        </Routes>
        
        </>
    )
}

export default AdminRoutes;