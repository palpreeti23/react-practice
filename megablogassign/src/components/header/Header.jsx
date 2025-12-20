import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Logo, LogoutBtn } from "../index";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

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
      name: "AllPosts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "AddPost",
      slug: "/add-post",
      active: authStatus,
    },
  ];
  return (
    <header className="w-full h-auto ">
      <nav className="bg-gray-300 rounded-lg ">
        <div className="w-full flex pr-8 ">
          <div className="px-3 object-contain ">
            <Logo />
          </div>
          <ul className="outline-none flex ml-auto flex-wrap items-center ">
            {navItem.map((items) =>
              items.active ? (
                <li key={items.name} className="px-8">
                  <button
                    onClick={() => navigate(items.slug)}
                    className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                  >
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
    </header>
  );
}

export default Header;
