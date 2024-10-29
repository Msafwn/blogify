import React from "react";
import { useDispatch } from "react-redux";
import authsevice from "../Appwrite/Auth";
import { logout } from "../features/AuthSlice";

function Logout() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authsevice.logout().then(() => dispatch(logout()));
  };
  return (
    <button
    onClick={logoutHandler}
      className="inline-block px-6 py-2
    duration-200 text-white font-bold  hover:bg-slate-900 rounded-full ">
      Logout
    </button>
  );
}

export default Logout;
