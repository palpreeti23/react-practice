import { useEffect, useState } from "react";
import "./App.css";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";
import appwriteService from "./appwrite/auth";
import { useDispatch } from "react-redux";
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
      <div className="min-h-screen flex flex-col ">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    )
  );
}

export default App;
