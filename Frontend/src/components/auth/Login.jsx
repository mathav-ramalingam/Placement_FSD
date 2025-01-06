import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  var [email, setemail] = useState("");
  var [password, setpass] = useState("");
  var navigate = useNavigate();

  const handlelogin = async (e) => {
    var data = { email, password };
    console.log(data);
    e.preventDefault();

    try {
      var res = await axios.post("http://localhost:5001/login", data);
      console.log(res.data.username);
      if (res.status === 200) {
        alert("Login Successful");
        localStorage.setItem("username", res.data.username);
        navigate("/navbar");
      } else {
        console.log("Login failed");
      }
    } catch (err) {
      console.log("Login Failed..");
    }
  };
  return (
    <>
      <div className="bg-white p-14 ">
        <form>
          <div className=" items-center">
            <label for="email" className="text-red-600 text-xl  ">
              Email
            </label>
            <input
              type="email"
              onChange={(e) => {
                setemail(e.target.value);
              }}
              className="pl-1 border border-cyan-950"
            ></input>
          </div>
          <div>
            <label for="password" className="text-red-600 text-xl">
              Password
            </label>
            <input
              type="password"
              onChange={(e) => {
                setpass(e.target.value);
              }}
              className="pl-1 border border-cyan-950"
            ></input>
          </div>
          <button
            onClick={handlelogin}
            className="p-1 border-4 mb-16 mt-7 text-white bg-black"
          >
            Login
          </button>
          <a 
            href='/register'
            className="p-1 border-4 mb-16 mt-7 text-white bg-black"
          >
            Signup
          </a>
        </form>
      </div>
    </>
  );
};
