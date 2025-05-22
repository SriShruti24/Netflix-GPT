import Header from "./Header";
import bg from "../assests/netflixbg.jpg"
import { useState } from "react";


const Login = () => {
  const [isSignInForm,setIsSignInForm]= useState(true);
  const toggleSignInform=()=>{
setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={bg}/>
      </div>
      <form className="  w-3/12 h-4/6 p-12 absolute bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-75 ">
      <h1 className=" font-bold text-3xl py-4 bg-center  ">{isSignInForm?"Sign In":"Sign Up"}</h1>
      {!isSignInForm && (<input type="text" placeholder="Full Name" className="p-2 my-4 w-full bg-gray-800"/>)}
       <input type="text" placeholder="Email Address" className="p-2 my-4 w-full bg- bg-gray-800 "/>
       <input type="password" placeholder="Password" className="p-2 my-4 w-full bg-gray-800"/>
       <button className="p-3  my-4 bg-red-700 w-full rounded-lg">{isSignInForm?"Sign In":"Sign Up"}</button>
       <p className="p-4 text-center cursor-pointer" onClick={toggleSignInform} >{isSignInForm?"New to Netflix! Sign Up Now":"Already a User!Sign In"}</p>
      </form>
    </div>
  );
};

export default Login;
