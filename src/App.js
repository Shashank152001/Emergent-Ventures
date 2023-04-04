import {useState} from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignIn from './Components/Login/SignIn';
import SignUp from './Components/SignUp/SignUp';
import Profile from './Components/Profile/Profile';
import Dashboard from './Components/Dashboard/Dashboard';
import {LoginContext} from './Context/LoginContext';


 
function App() {
  const [userLoginEmail, setuserLoginEmail] = useState(localStorage.getItem('userLoginEmail'))
  const [userLoginStatus, setuserLoginStatus] = useState(localStorage.getItem('userLoginStatus'))
  const[userSkills,setUserSkills]=useState(localStorage.getItem('userSkills'))
  return (
    <>
    <Router>
      <LoginContext.Provider value={{userLoginEmail,setuserLoginEmail,userLoginStatus,setuserLoginStatus,userSkills,setUserSkills}}>
      <Routes>
         <Route element={<SignIn/>} path='/'></Route>
         <Route element={<SignUp/>} path='/signup'></Route>
         <Route element={<Dashboard/>} path='/dashboard'></Route>
         <Route element={<Profile/>} path='/profile'></Route>
      </Routes>
      </LoginContext.Provider>
    </Router>
    </>
  );
}

export default App;
