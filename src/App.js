
import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar';
import About from './pages/About';
import Books from './pages/Books';
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';





function App() {

const navigate=useNavigate();
useEffect(()=>{
  navigate("/books")
},[])

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="home" element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="books" element={<Books/>} />
        <Route path="login" element={<Login/>} />
        <Route path="logout" element={<Logout/>} />
      </Routes>
      
    </div>
  );
}

export default App;
