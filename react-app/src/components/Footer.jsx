import React from 'react';

export const Footer = () => {
  return (
    <>
      <footer className="flex bg-black text-white font-bold p-5 items-center justify-evenly w-full">
        <div className="form text-center">
          <h1 className="text-2xl text-red-500">Subscribe To our Channel</h1>
          <label htmlFor="name" className="text-lg block mt-4">Name</label>
          <input
            type="text"
            id="name"
            className="mt-2 p-2 rounded-lg border border-gray-400 focus:ring-2 focus:ring-red-500"
          />
          <label htmlFor="mail" className="text-lg block mt-4">Email</label>
          <input
            type="email"
            id="mail"
            className="mt-2 p-2 rounded-lg border border-gray-400 focus:ring-2 focus:ring-red-500"
          /><br />
          <button className="mt-4 bg-gray-200 text-black py-2 px-4 rounded-lg hover:shadow-lg hover:shadow-red-500">
            Submit
          </button>
        </div>
        <div className="msg">
          <ul className="space-y-3">
            <li className="text-2xl text-red-500">Quick Links</li>
            <li>About us</li>
            <li>Blogs</li>
            <li>Portfolio</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className="con">
          <ul className="space-y-3">
            <li className="text-2xl text-red-500">Contact Info</li>
            <li>+91 7871937373</li>
            <li>mathavra.22cse@kongu.edu</li>
          </ul>
        </div>
      </footer>
      <div className="text-center bg-red-700 text-white p-3">
        <h4>Designed by Mr.X</h4>
      </div>
    </>
  );
};
