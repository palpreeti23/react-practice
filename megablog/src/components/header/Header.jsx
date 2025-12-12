import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { Logo, LogoutBtn, Container } from "../index";

export default function Header() {
  const navigate = useNavigate();
  const { authStatus } = useSelector((state) => state.auth.status);

  const navItem = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "all post",
      slug: "/AllPost",
      active: authStatus,
    },
    {
      name: "add post",
      slug: "/AddPost",
      active: authStatus,
    },
  ];

  return (
    <header className="w-full">
      <Container>
        <nav className="bg-gray-300 rounded-xl">
          <div className="w-full flex">
            <div>
              <Logo />
            </div>
            <ul className="outline-none">
              {navItem.map((items) =>
                items.active ? (
                  <li key={items.name}>
                    <button onClick={() => navigate(items.slug)}>
                      {items.name}
                    </button>
                  </li>
                ) : null
              )}

              {authStatus && (
                <li>
                  <LogoutBtn />
                </li>
              )}
            </ul>
          </div>
        </nav>
      </Container>
    </header>
  );
}
