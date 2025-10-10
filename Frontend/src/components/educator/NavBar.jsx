import React from "react";
import { assets, dummyEducatorData } from "../../assets/assets.js";
import { useNavigate } from "react-router-dom";
import { useUser, UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const educatorData = dummyEducatorData;
  return (
    <div className="flex justify-between items-center pt-5 px-5 sm:px-12 border-b border-gray-500 py-3">
      <img
        onClick={() => navigate("/")}
        src={assets.logo}
        alt="Logo"
        className="w-25 sm:w-30 cursor-pointer"
      />
      <div className="flex items-center gap-5 relative text-gray-800">
        <p>Hi! 
          {user ? " " + user.fullName : 'Developers'}
        </p>
        {user ? <UserButton /> : <img src={assets.user_icon} className="max-w-8"/>}</div>
    </div>
  );
};

export default NavBar;
