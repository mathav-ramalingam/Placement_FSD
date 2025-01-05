import React from "react";
import { Link } from "react-router-dom";

export const Navbar = (props) => {
  const name = localStorage.getItem("username");
  return (
    <>
      <div class="hidden md:flex bg-black items-center justify-between px-4 py-7 text-2xl text-white">
        <div className=" w-1/2">
          <Link to="" className="rtd">
          {name}
          </Link>
        </div>
        <div>
          <ul className="flex gap-5 w-1/2">
            <li>
              <Link to="/" className="rtd">
                Home 
              </Link>
            </li>
            <li>
              <Link to="/egstate" className="rtd">
                About
              </Link>
            </li>
            <li>
              <Link to="/Usestate" className="rtd">
                Project
              </Link>
            </li>
            <li>
              <Link to="/Egaxios" className="rtd">
                Certification
              </Link>
            </li>
            <li>
              <Link to="/useref" className="rtd">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/login" className="rtd">
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" className="rtd">
                Signup
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
