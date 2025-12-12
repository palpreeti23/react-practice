import { useEffect, useState } from "react";
import "./App.css";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";
import appwriteService from "./appwrite/auth";
import { UseDispatch, useDispatch } from "react-redux";
import { login, logout } from "./store/authSlice";

function App() {
  const [loading, setLoading] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    appwriteService
      .getCurrentUser()
      .then((userdata) => {
        if (userdata) {
          dispatch(login());
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    !loading && (
      <div className="bg-gray-400 w-full h-screen inline-block ">
        <div className="flex flex-wrap h-auto w-full ">
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    )
  );
}

export default App;
