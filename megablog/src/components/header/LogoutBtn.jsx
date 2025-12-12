import React, { useEffect } from "react";
import { UseDispatch, useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";
import authService from "../../appwrite/auth";

export default function LogoutBtn() {
  const dispatch = useDispatch();
  const LogoutHandler = () => {
    authService.logOut().then(() => dispatch(logout()));
  };

  return (
    <button className="px-2 py-1 ml-2" onClick={LogoutHandler}>
      Logout
    </button>
  );
}
