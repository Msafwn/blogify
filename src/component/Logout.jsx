import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import authsevice from "../Appwrite/Auth";
import { logout } from "../features/AuthSlice";

function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    authsevice.logout().then(() => {
      dispatch(logout());
      navigate('/signIn');
    });
  };
  return (
    <button
      onClick={logoutHandler}
      className="inline-block px-6 py-2.5 font-semibold text-white rounded-lg transition-all duration-300 hover:bg-red-600/80 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-500/50 bg-gradient-to-r from-red-600 to-red-700"
    >
      Logout
    </button>
  );
}

export default Logout;
