import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../index";

function Footer() {
  return (
    <footer className="bg-gray-400 w-full h-auto">
      <Container>
        <div className="flex flex-wrap w-full mt-3 mb-5 px-4 py-2">
          <div className="flex flex-col">
            <div>
              <Logo />
            </div>
            <div className="text-gray-600 font-medium mt-8 px-3">
              Copyright Reserved by DevUI
            </div>
          </div>

          <div className="flex flex-col">
            <h3>
              <Link to="/" className="text-gray-500 font-medium ">
                COMPANY
              </Link>
            </h3>
            <div>
              <ul className="outline-none">
                <li>
                  <Link to="/" className="text-black">
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-black">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-black">
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-black">
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col">
            <h3>
              <Link to="/" className="text-gray-500 font-medium ">
                SUPPORT
              </Link>
            </h3>
            <div>
              <ul className="outline-none">
                <li>
                  <Link to="/" className="text-black">
                    Account
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-black">
                    Help
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-black">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-black">
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col">
            <h3>
              <Link to="/" className="text-gray-500 font-medium ">
                LEGALS
              </Link>
            </h3>
            <div>
              <ul className="outline-none">
                <li>
                  <Link to="/" className="text-black">
                    Terms & Condition
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-black">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-black">
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
