import Header from "./Header";
import bg from "../assests/netflixbg.jpg"
import { useRef, useState } from "react";
import {checkValidData} from "../utils/validate";


const Login = () => {
  const [isSignInForm,setIsSignInForm]= useState(true);
  const [ errorMessage,setErrorMessage]=useState(null);

  const email=useRef(null); 
  const password=useRef(null);
  const nameref=useRef(null);

  const handleButtonClick=()=>{
//validate thhe form data
//useref
const message=checkValidData(email.current.value,password.current.value,nameref.current.value);
setErrorMessage(message);

  }

  const toggleSignInform=()=>{
setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={bg}/>
      </div>
      <form 
      onSubmit={(e)=>e.preventDefault()}
      className="  w-3/12 h-4/6 p-12 absolute bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-75 ">
      <h1 className=" font-bold text-3xl py-4 bg-center  ">

        {isSignInForm?"Sign In":"Sign Up"}</h1>

      {!isSignInForm && (<input ref={nameref}
        //will refer to input in name box
      type="text" placeholder="Full Name" className="p-2 my-4 w-full bg-gray-800"/>)}
       <input
       ref={email}//will refer to input in email box
       type="text" placeholder="Email Address" className="p-2 my-4 w-full bg- bg-gray-800 "/>
       <input
      ref={password} //will refer to input in password box
       type="password" placeholder="Password" className="p-2 my-4 w-full bg-gray-800"/>


       <p className="text-red-600  font-bold text-lg py-2">{errorMessage}</p>


       <button className="p-3  my-4 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>{isSignInForm?
       "Sign In":"Sign Up"}</button>

       <p className="p-4 text-center cursor-pointer" onClick={toggleSignInform} >{isSignInForm?"New to Netflix! Sign Up Now":"Already a User!Sign In"}</p>
      </form>
    </div>
  );
};

export default Login;
