import React from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, dispalyName } = user;
        dispatch(addUser({ uid: uid, email: email, dispalyName: dispalyName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    //Unsubscribing when component unmounts
    return () => unsubscribe();
  }, []);
  return (
    <div>
      <div className="absolute px-8 py-2 w-full bg-gradient-to-b from-black z-10  flex justify-between">
        <img className="w-44" src={LOGO} alt="Netflix Logo" />
        {user && (
          <button onClick={handleSignOut} className="font-bold text-white">
            {" "}
            Sign Out
          </button>
        )}{" "}
      </div>
    </div>
  );
};

export default Header;
