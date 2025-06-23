import { useState } from "react";
import Pic1 from "../assets/taskmgt3.avif";
import { motion } from "framer-motion";
import { Link } from "react-router";

const SignUp =() => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    createPassword: "",
    confirmPassword: "",
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
    return (
        <div className="flex w-full min-h-screen ">
            
        <div className="flex flex-col lg:w-1/2 md:justify-center lg:px-16 lg:pt-4 px-4">
            <div className="flex py-6  justify-center ">
                <h2 className=" lg:text-4xl text-2xl font-bold text-[#19475b] mb-2  ">
            Create Account
          </h2>
            </div>
        
            <div className="flex justify-between items-center flex-wrap">
                              <label className="block text-sm font-medium text-[#19475b] mb-1">
                Name :
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="p-2 border w-[300px] border-gray-300 rounded mb-4 focus:outline-none focus:ring-2"
              />
            </div>
            <div className="flex justify-between items-center flex-wrap">
              <label className="block text-sm font-medium text-[#19475b] mb-1">
                Email :
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="p-2 border w-[300px] border-gray-300 rounded mb-4 focus:outline-none focus:ring-2"
              />
            </div>
            <div className="flex justify-between items-center flex-wrap">
              <label className="block text-sm font-medium text-[#19475b] mb-1">
                Create Password :
              </label>
              <input
                type="password"
                name="createPassword"
                onChange={handleChange}
                value={formData.createPassword}
                placeholder="Create a password"
                className="p-2 border w-[300px] border-gray-300 rounded mb-4 focus:outline-none focus:ring-2"
              />
            </div>
            <div className="flex justify-between items-center flex-wrap">
              <label className="block text-sm font-medium text-[#19475b] mb-1">
                Confirm Password :
              </label>
              <input
                type="password"
                name="confirmPassword"
                onChange={handleChange}
                value={formData.confirmPassword}
                placeholder="Re-enter your password"
                className="p-2 border w-[300px] border-gray-300 rounded mb-4 focus:outline-none focus:ring-2"
              />
            </div>
            <div className="flex justify-center">
                <button
                onClick={handleSubmit}
              type="submit"
              className="bg-[#19475b] text-white px-6 py-3 lg:w-36 rounded-lg my-4 cursor-pointer hover:bg-white transition duration-300 shadow-lg hover:text-[#19475b] hover:shadow-lg shadow-gray-200 font-semibold"
            >
              Sign Up
            </button>
            </div>
            <div className="flex flex-row gap-2 mt-2 lg:hidden mb-2">
              <h3 className="text-sm pt-1">Already have an account?</h3>
              <p className="text-md text-[#19475b] pt-0.5">Login</p>
            </div>
      </div>
  
          <div className="lg:flex flex-col hidden  bg-[#19475b] w-1/2 gap-4 lg:pt-14 lg:px-12 px-4"> 
          <h2 className="flex text-3xl font-bold gap-2 text-white">Already have an account with us ? </h2>
          <p className="flex text-md text-white">Click the button below to login.</p>

          <motion.div
                  className="flex justify-center items-center gap-4 flex-wrap mb-8"
                  initial={{ opacity: 0, y: -100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                    <motion.img
          src={Pic1}
          alt="Task"
          className=" rounded-xl"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
        />

                </motion.div>
                
          <div className="flex justify-center">
            <Link to="/login">
            <button
            className="bg-white text-[#19475b] px-6 py-3 lg:w-36 rounded-lg my-6 cursor-pointer hover:bg-[#19475b] hover:text-white transition duration-300 shadow-lg hover:shadow-cyan-300 hover:shadow-2xl font-semibold"
          >
            Log In
          </button></Link>
            
          </div>
           
       </div>
    </div>
         
    )
}

export default SignUp;