import React from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const navigate=useNavigate()
  return (
    <h1>
    <button onClick={()=>navigate("/home")}>Logout</button>
    </h1>
  )
}

export default Logout
