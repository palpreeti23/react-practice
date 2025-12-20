import React from "react";
import authService from "../../appwrite/auth";
import { logout as authLogout } from "../../store/storeSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

function LogoutBtn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    authService.logOut().then(() => {
      dispatch(authLogout());
      navigate("/");
    });
  };

  return (
    <button className="px-2 py-1 ml-2" onClick={logoutHandler}>
      Logout
    </button>
  );
}

export default LogoutBtn;
