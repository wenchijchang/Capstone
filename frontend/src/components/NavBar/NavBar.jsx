import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import logo from "../Logo/LogoMakr-3n2Smp.png";
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <div className="brand">
        <b>Medication Shortage</b>
      </div>
      <img src={logo} alt="logo" width={100} height={80} />
      {user ? (
        <button onClick={logoutUser}>Logout</button>
      ) : (
        <button onClick={() => navigate("/login")}>Login</button>
      )}
    </div>
  );
};

export default Navbar;
