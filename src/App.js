
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignIn from './Components/SignIn';
import Dashboard from './Components/Dashboard';
import Skill from './Components/Skills';
import Timesheet from './Components/Timesheet';
import MyProject from './Components/project';

function App() {
  return (
    <>
    <Router>
      <Routes>
         <Route element={<SignIn/>} path='/'></Route>
         <Route element={<Timesheet/>} path='/timesheet'></Route>
         <Route element={<Skill/>} path='/skill'></Route>
         <Route element={<MyProject/>} path='/project'></Route>
          <Route element={<Dashboard/>} path='/dashboard'></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
