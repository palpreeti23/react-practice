import React, { useContext } from "react";
import UserContex from "../context/UserContext";

function Profile(){

    const {user} = useContext(UserContex)

    if(!user) return <div>please Login</div>

   return <div>welcome {user.username} & passcode is {user.passward}</div>


}

export default Profile