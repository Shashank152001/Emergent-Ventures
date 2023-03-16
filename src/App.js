
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignIn from './Components/SignIn';
import Dashboard from './Components/Dashboard';
<<<<<<< HEAD
import Skill from './Components/Skills';
import Timesheet from './Components/Timesheet';
import MyProject from './Components/project';
=======
<<<<<<< HEAD
=======
import SignUp from './Components/SignUp';
>>>>>>> 8e45dd2f6f8e8ebfeff00dff9948d9ffe69b2dc9
>>>>>>> main
function App() {
  return (
    <>
    <Router>
      <Routes>
         <Route element={<SignIn/>} path='/'></Route>
<<<<<<< HEAD
         <Route element={<Timesheet/>} path='/timesheet'></Route>
         <Route element={<Skill/>} path='/skill'></Route>
         <Route element={<MyProject/>} path='/project'></Route>
=======
<<<<<<< HEAD
=======
         <Route element={<SignUp/>} path='signup'></Route>
>>>>>>> 8e45dd2f6f8e8ebfeff00dff9948d9ffe69b2dc9
>>>>>>> main
          <Route element={<Dashboard/>} path='/dashboard'></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
