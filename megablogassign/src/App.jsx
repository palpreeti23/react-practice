import { useState, useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { Header, Footer } from "./components";
import authService from "./appwrite/auth";
import { Outlet } from "react-router";
import { login, logout } from "./store/storeSlice";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col ">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
