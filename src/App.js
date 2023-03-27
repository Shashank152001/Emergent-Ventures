
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignIn from './Components/Login/SignIn';
import SignUp from './Components/SignUp/SignUp'
import Dashboard from './Components/Dashboard/Dashboard';


function App() {
  return (
    <>
    <Router>
      <Routes>
         <Route element={<SignIn/>} path='/'></Route>
         <Route element={<SignUp/>} path='/signup'></Route>
         <Route element={<Dashboard/>} path='/dashboard'></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
