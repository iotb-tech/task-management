import React from "react";
import animated_ashutosh from "../pages/animated_ashutosh.png"
import { useState, useEffect } from "react";


function EditProfile(){
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [occupation, setOccupation] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [number, setNumber] = useState('');
    const [state, setState] = useState('');


    
    const handleSave = (e) =>{
        e.preventDefault();
        console.log('saved Data', name,email,occupation,address,city,number, state)
        
        window.location.href = '/Profile'
    } 
    const handleCancel = (e) => {
        e.preventDefault()
        window.location.href = '/Profile'
    }
    return(
        <div className="secondary-color mx-auto lg:w-1/3 mt-4 md:w-1/2 justify-items-center  rounded-xl  pb-20">
        
            <div className="flex justify-between">
             <h1 className="pt-10 lg:pr-56 md:pr-32 max-sm:pr-40 text-2xl  primary-font pb-5"> Edit profile</h1>
             <img src={animated_ashutosh}  alt="" className="mt-10 lg:size-14 md:size-12  max-sm:size-10"/> 
            </div>
            <form onSubmit={handleSave} className="mt-14 justify-self-start xl:ml-10 md:ml-7 max-sm: ml-6 ">
                <input className="border-1 rounded-md xl:pr-56 md:pr-32 max-sm:pr-32 pt-1 pb-1 pl-3 primary-color" type="text" name= "fullname" value={name} onChange={(e) => setName (e.target.value)} placeholder="full name"></input><br></br>
                <input  className="border-1 rounded-md xl:pr-56 md:pr-32 max-sm:pr-32 pb-1 pt-1 pl-3 mt-6 primary-color" type="email " name="email" value={email} onChange={(e) => setEmail(e. target.value)}  placeholder="Email"></input><br></br>
                <input className="border-1 rounded-md xl:pr-56 md:pr-32 max-sm:pr-32 pb-1 pt-1 pl-3 mt-6 primary-color"  type="text" name="occupation" value={occupation} onChange={(e) => setOccupation (e.target.value)}placeholder="Occupation"></input><br></br>
                <input className="border-1 rounded-md xl:pr-56 md:pr-32 max-sm:pr-32 pb-1 pt-1 pl-3 mt-6 primary-color" type="number" name="phoneNumber" value={number} onChange={(e) => setNumber(e.target.value)} placeholder="phone Number"></input><br></br>
                <input className="border-1 rounded-md xl:pr-56 md:pr-32 max-sm:pr-32 pb-1 pt-1 pl-3 mt-6 primary-color" type="text"name="address" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address"></input><br></br>
                <input className="border-1 rounded-md xl:pr-56 md:pr-32 max-sm:pr-32 pb-1 pt-1 pl-3 mt-6 primary-color" type="text" name="city" value={city} onChange={(e) => setCity(e.target.value) } placeholder=" city"></input><br></br>
                <input className="border-1 rounded-md xl:pr-56 md:pr-32 max-sm:pr-32 pb-1 pt-1 pl-3 mt-6 primary-color" type="text" name="state" value={state} onChange={(e) => setState(e.target.value)} placeholder="State"></input>

            </form>
            <div className="flex justify-around mt-14 "> 
                <div>
                    <button className="mr-14 pt-1 pb-1 rounded-md pr-6 pl-6 border-1 bg-cyan-950 " type="submit" onClick={handleSave}>Save</button>
                </div>
                <div>
                     <button className="pb-1 pt-1 rounded-md pr-5 pl-5 border-1 bg-cyan-950" type="button" onClick={handleCancel}>Cancel</button>
                </div>
            </div>
        </div>
    )
}
export default EditProfile;