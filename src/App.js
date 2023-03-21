
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import SignUp from './Components/SignUp/SignUp';
function App() {
  return (
    <>
    <Router>
      <Routes>
         <Route element={<Login/>} path='/'></Route>
         <Route element={<SignUp/>} path='signup'></Route>
          <Route element={<Dashboard/>} path='/dashboard'></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
