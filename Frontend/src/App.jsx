import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import EgState from "./components/EgState";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Usestate from "./components/Usestate";
import Egaxios from "./components/Egaxios";
import Useref from "./components/Useref";
import UseContext from "./components/UseContext";
import UseMemo from "./components/UseMemo";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route exact path="/navbar" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="egstate" element={<EgState />} />
            <Route path="Usestate" element={<Usestate />} />
            <Route path="Egaxios" element={<Egaxios />} />
            <Route path="useref" element={<UseMemo />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
