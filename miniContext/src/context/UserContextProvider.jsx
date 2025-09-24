import React, { useState } from "react";
import UserContex from "./UserContext";

const UserContextProvider = ({children})=>{

    const [user, setUser] = useState(null)
    return(

        <UserContex.Provider value={{user, setUser}}>
            {children}
        </UserContex.Provider>
    )
}

export default UserContextProvider