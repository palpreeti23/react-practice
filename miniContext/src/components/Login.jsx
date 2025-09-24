import React, { useContext, useState } from "react";
import UserContex from "../context/UserContext";

function Login(){
    const [username, setUsername] = useState('');
    const [passward, setPassward] = useState('');
    const {setUser} = useContext(UserContex)

    const submitHandler = (e)=>{
        e.preventDefault();
        setUser({username,passward})
        
    }
    return(
        <>
         <div>Login</div>
         <input 
         value={username}
         onChange={(e)=>setUsername(e.target.value)}
         type="text" 
         placeholder="username" 
         
         />

         <input 
         value={passward}
         onChange={(e)=> setPassward(e.target.value)}
         type="number"
         placeholder="passward"/>
         <button onClick={submitHandler}>submit</button>
        </>
       
    )
}

export default Login