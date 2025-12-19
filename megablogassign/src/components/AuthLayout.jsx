import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

function AuthLayout({ children, authentication = true }) {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (authentication !== authStatus) {
      navigate("/login");
    } else if (!authentication === authStatus) {
      navigate("/");
    }
    setLoading(false);
  }, [navigate]);

  return loading ? <p>loading.....</p> : <div>{children}</div>;
}

export default AuthLayout;
