
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignIn from './Components/SignIn';
import Dashboard from './Components/Dashboard';
import SignUp from './Components/SignUp';
function App() {
  return (
    <>
    <Router>
      <Routes>
         <Route element={<SignIn/>} path='/'></Route>
         <Route element={<SignUp/>} path='signup'></Route>
          <Route element={<Dashboard/>} path='/dashboard'></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
