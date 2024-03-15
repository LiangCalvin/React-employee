import './App.css';
import Navbar from './components/NavbarComp';
import Users from './components/UsersComp';
import UserCreate from './pages/UserCreate'
import {Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Users />}></Route>
        <Route path='/create' element={<UserCreate />}></Route>
      </Routes>
    </div>
  );
}

export default App;
