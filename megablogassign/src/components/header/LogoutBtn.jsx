import React from "react";
import authService from "../../appwrite/auth";
import { logout as authLogout } from "../../store/storeSlice";
import { useDispatch } from "react-redux";

function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = async () => {
    await authService.logOut().then(() => {
      dispatch(authLogout);
    });
  };

  return (
    <button className="px-2 py-1 ml-2" onClick={logoutHandler}>
      Logout
    </button>
  );
}

export default LogoutBtn;
