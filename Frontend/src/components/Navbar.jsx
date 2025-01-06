import React from "react";
import { Link, Outlet} from "react-router-dom";
import { useNavigate } from 'react-router-dom'

export const Navbar = (props) => {
  const navigate = useNavigate();
  const name = localStorage.getItem("username");

  const logout = () => {
    localStorage.removeItem("username");
    navigate("/");
  };
  return (
    <>
      <div class="hidden md:flex bg-black items-center justify-between px-4 py-7 text-2xl text-white">
        <div className=" ">
          <Link to="" className="rtd">
            {name}
          </Link>
        </div>
        <div>
          <ul className="flex gap-5 ">
            <li>
              <Link to="/navbar" className="rtd">
                Home
              </Link>
            </li>
            <li>
              <Link to="egstate" className="rtd">
                About
              </Link>
            </li>
            <li>
              <Link to="Usestate" className="rtd">
                Project
              </Link>
            </li>
            <li>
              <Link to="Egaxios" className="rtd">
                Certification
              </Link>
            </li>
            <li>
              <Link to="useref" className="rtd">
                Contact
              </Link>
            </li>

            <li onClick={logout}>
              <Link className="rtd" >
                log out
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
};
