import React from "react";

const ForgottenPassword = () => {
  return (
    <div className="max-w-md mx-auto mt-24 p-8 bg-white rounded-lg shadow-md secondary-font">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        Forgotten Password?
      </h2>
      <p className="text-sm text-gray-600 mb-6">
        Enter your email address and we'll send you a link to reset your
        password.
      </p>
      <form className="flex flex-col">
        <label htmlFor="email" className="mb-2 font-medium text-gray-700">
          Email:
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          className="p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:secondary-color"
          required
        />
        <button
          type="submit"
          className="secondary-color text-white font-semibold py-2 px-4 rounded cursor-pointer transition-colors duration-300"
        >
          Reset your password
        </button>
      </form>
    </div>
  );
};

export default ForgottenPassword;
