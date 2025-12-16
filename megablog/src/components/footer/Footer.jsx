import React from "react";
import { Link } from "react-router-dom";
import { Logo, Container } from "../index";

function Footer() {
  return (
    <footer className="w-full h-auto mt-8 ">
      <div className="bg-gray-300 rounded-lg  ">
        <div className="flex flex-wrap w-full mt-3 px-2 py-5 justify-around ">
          <div className="flex flex-col flex-wrap">
            <div className="text-left px-1">
              <Logo className="h-17 w-20" />
            </div>
            <div className="text-gray-500 font-medium mt-auto mb-8 pl-1 pr-5">
              Copyright Reserved by DevUI
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="pb-3 text-left">
              <Link to="/" className="text-gray-600 font-medium ">
                COMPANY
              </Link>
            </h3>
            <div>
              <ul className="outline-none text-left text-black">
                <li className="pb-2">
                  <Link to="/">Features</Link>
                </li>
                <li className="pb-2">
                  <Link to="/">Pricing</Link>
                </li>
                <li className="pb-2">
                  <Link to="/">Affiliate Program</Link>
                </li>

                <li className="pb-2">
                  <Link to="/">Press Kit</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="pb-3 text-left text-gray-600 font-medium ">
              <Link to="/">SUPPORT</Link>
            </h3>
            <div>
              <ul className="outline-none my-2 text-left text-black">
                <li className="pb-2">
                  <Link to="/" className="text-black">
                    Account
                  </Link>
                </li>
                <li className="pb-2">
                  <Link to="/">Help</Link>
                </li>
                <li className="pb-2">
                  <Link to="/">Contact Us</Link>
                </li>
                <li className="pb-2">
                  <Link to="/">Customer Support</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="pb-3 text-left">
              <Link to="/" className="text-gray-600 font-medium ">
                LEGALS
              </Link>
            </h3>
            <div>
              <ul className="outline-none my-2  text-left text-black">
                <li className="pb-2">
                  <Link to="/">Terms & Condition</Link>
                </li>
                <li className="pb-2">
                  <Link to="/">Privacy Policy</Link>
                </li>
                <li className="pb-2">
                  <Link to="/">Licensing</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
