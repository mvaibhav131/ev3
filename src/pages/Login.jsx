import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [token,setToken]=useState();
    const navigate=useNavigate();
    const handleChange=(e)=>{
        const inputname=e.target.name 
        if(e.target.name=="eve.holt@reqres.in"){
            setToken({...token,[inputname]:e.target.value? e.target.value:null})
        }
        else{
            setToken({...token,[inputname]:e.target.value})
        }
    }   

const handleSubmit=async (e)=>{
    e.preventDefault()
    let res=await fetch("https://reqres.in/api/login",{
        method:"POST",
        headers:{
       "context-type":"application/json"

        },
        body:JSON.stringify({
            "email":"eve.holt@reqres.in",
            "password":"cityslicka"
        }),
    });
    let data=await res.json();
    setToken(data.token);
};
const logout=()=>{
    setToken("")
};

  return (
    <>
    <form onSubmit={handleSubmit}>
        <div>
        Enter Your email : <input onChange={handleChange} style={{color:"blue",width:"550px",height:"30px",marginBottom:"20px"}} type="text" placeholder='Enter email'   />
        </div>
        <div>
        Enter Your Password : <input onChange={handleChange} style={{color:"blue",width:"550px",height:"30px",marginBottom:"20px"}} type="password" placeholder='Enter Password'   />
        </div>
        <div>
            
            <button onClick={()=>navigate("/books")}>Submit</button>
        </div>
     
    </form>
    </>
  )
}

export default Login
