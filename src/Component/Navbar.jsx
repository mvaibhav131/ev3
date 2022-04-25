import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate=useNavigate();
  return (
    <div style={{
        marginBottom:"20px",
        padding:"30px",
        background:"pink",
        color:"white",
        fontSize:"30px",
        fontWeight:"600",
        display:"flex",
        gap:"20px"
    }}
    >
        <div>
            <Link to="/home" >Home</Link>
        </div>
        <div>
            <Link to="/about" >About</Link>
        </div>
        <div>
            <Link to="/books" >Books</Link>
        </div>
        <div>
            <Link to="/login" >Login</Link>
        </div>
        <div>
            <Link to="/logout" >Logout</Link>
        </div>
      
    </div>
  )
}

export default Navbar
