import React, { useState } from "react";
import { Link } from "react-router";
import Pic2 from "../assets/taskmgt2.png";
import { motion } from "framer-motion";

const Login = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
const handleChange = (e) => {
  setFormData ({
    ...formData, [e.target.name] : e.target.value,
  })
}
const handleSubmit = (e) => {
  e.preventDefault();
  console.log(formData)
}

  return(
    <div className="flex w-full min-h-screen gap-12">
      {/* left */}
       <div className="lg:flex flex-col hidden  bg-[#19475b] w-1/2 gap-4 lg:pt-14 lg:px-12 px-4"> 
          <h2 className="flex text-3xl font-bold gap-2 text-white">New Here ? </h2>
          <p className="flex text-md text-white">Sign up and start creating plans for future.</p>

          <motion.div
                  className="flex justify-center items-center gap-4 flex-wrap mb-8"
                  initial={{ opacity: 0, y: -100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                    <motion.img
          src={Pic2}
          alt="Task"
          className=" rounded-xl"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
        />

                </motion.div>
                
          <div className="flex justify-center">
            <Link to="/signup">
            <button
            onClick={() => setShowLogin(true)}
            className="bg-white text-[#19475b] px-6 py-3 lg:w-36 rounded-lg my-6 cursor-pointer hover:bg-[#19475b] hover:text-white transition duration-300 shadow-lg hover:shadow-cyan-300 hover:shadow-2xl font-semibold"
          >
            Sign Up
          </button></Link>
            
          </div>
           
       </div>
       {/* right */}
       <div className="flex flex-col lg:w-1/2 md:justify-center lg:px-16 lg:pt-4 px-4">
        <div className="flex flex-col gap-4 lg:justify-center ">
        <h2 className="text-3xl font-bold  lg:-mt-48 mt-12 text-center">Already have an Account with Us ?</h2>
      </div>
      
          
            <div className="flex justify-between flex-wrap items-center lg:-mt-8 mt-8">
              <label className="flex text-sm font-medium text-[#19475b] mb-2">
                Email:
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="p-2 border border-gray-300 lg:w-72 w-52 rounded mb-4 focus:outline-none focus:ring-2"
              />
            </div>
            <div className="flex justify-between flex-wrap items-center">
              <label className="block text-sm font-medium text-[#19475b] mb-1">
                Password:
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="p-2 border w-52 lg:w-72 border-gray-300 rounded mb-4 focus:outline-none focus:ring-2"
              />
            </div>
            <div className="flex justify-center pt-8">
              <button
              type="submit"
              onClick={handleSubmit}
              className="bg-[#19475b] text-white w-36 h-12 rounded-xl"
            >
              Log In
            </button>
            </div>
            
                      <div className="text-left pt-6 mt-2">
            <Link
              to="/forgotten-password"
              href="#"
              className="text-sm text-black hover:underline transition"
            >
              Forgotten password?
            </Link>
          </div>

           <Link to="/signup">
             <div className="flex mt-2 gap-2 lg:hidden mb-2">
              <h3 className="text-sm pt-1">New here?</h3>
              <p className="text-md text-[#19475b] pt-0.5">Create an Account</p>
          </div>
          </Link>
       </div>
      
       </div>
  );
};

export default Login;
