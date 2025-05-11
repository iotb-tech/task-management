import React, { useState } from 'react';
import { Link } from 'react-router';

const Login = () => {
  const [showLogin, setShowLogin] = useState(false);

  const FormPanel = (
    <div className="p-8 flex flex-col bg-white">
      {showLogin ? (
        <>
          <h3 className="text-xl font-semibold text-[#19475b] mb-6 text-center">Log In</h3>
          <form action="#" method="POST" className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-[#19475b] mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 border border-gray-300 w-[300px] rounded mb-4 focus:outline-none focus:ring-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#19475b] mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="p-2 border w-[300px] border-gray-300 rounded mb-4 focus:outline-none focus:ring-2"
              />
            </div>
            <button
              type="submit"
              className="bg-white text-black px-6 py-3 rounded-full my-6 cursor-pointer hover:bg-gray-100 transition duration-300 shadow-md hover:shadow-lg font-semibold"
            >
              Log In
            </button>
          </form>
          <div className="text-left mt-4">
            <Link
              to="/forgot-password"
              href="#"
              className="text-sm text-black hover:underline transition"
            >
              Forgotten password?
            </Link>
          </div>
        </>
      ) : (
        <>
          <h2 className="text-2xl font-bold text-[#19475b] mb-4 text-center">Create an Account</h2>
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-[#19475b] mb-1">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="p-2 border w-[300px] border-gray-300 rounded mb-4 focus:outline-none focus:ring-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#19475b] mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 border w-[300px] border-gray-300 rounded mb-4 focus:outline-none focus:ring-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#19475b] mb-1">
                Create Password
              </label>
              <input
                type="password"
                placeholder="Create a password"
                className="p-2 border w-[300px] border-gray-300 rounded mb-4 focus:outline-none focus:ring-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#19475b] mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Re-enter your password"
                className="p-2 border w-[300px] border-gray-300 rounded mb-4 focus:outline-none focus:ring-2"
              />
            </div>
            <button
              type="submit"
              className="bg-white text-black px-6 py-3 rounded-full my-6 cursor-pointer hover:bg-gray-100 transition duration-300 shadow-md hover:shadow-lg font-semibold"
            >
              Sign Up
            </button>
          </form>
        </>
      )}
    </div>
  );

  const InfoPanel = (
    <div className="p-8 primary-color text-white flex flex-col justify-center items-center text-center">
      {showLogin ? (
        <>
          <h2 className="text-3xl font-bold mb-4">First time here? Awesome.</h2>
          <p className="mb-6">
            Sign up to plan smarter, work better, and get more done — with less stress.
          </p>
          <button
            onClick={() => setShowLogin(false)}
            className="bg-white text-black px-6 py-3 rounded-full my-6 cursor-pointer hover:bg-gray-100 transition duration-300 shadow-md hover:shadow-lg font-semibold"
          >
            Sign Up
          </button>
        </>
      ) : (
        <>
          <h2 className="text-3xl font-bold mb-4">Welcome back!</h2>
          <p className="mb-6 w-full max-w-md px-4 mx-auto text-center">
            Let's make today a productive one — no pressure, just progress. Log in to get your tasks
            done.
          </p>
          <button
            onClick={() => setShowLogin(true)}
            className="bg-white text-black px-6 py-3 rounded-full my-6 cursor-pointer hover:bg-gray-100 transition duration-300 shadow-md hover:shadow-lg font-semibold"
          >
            Log In
          </button>
        </>
      )}
    </div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-4xl grid md:grid-cols-2 transition-all duration-500">
        {showLogin ? (
          <>
            {InfoPanel}
            {FormPanel}
          </>
        ) : (
          <>
            {FormPanel}
            {InfoPanel}
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
