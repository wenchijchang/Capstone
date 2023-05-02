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
      <div className="brand" style={{ flexBasis: "33%" }}>
        <b>Medication Shortage</b>
        <i style={{ fontSize: "12px" }}>Track&Plan</i>
      </div>
      <div style={{ flexBasis: "33%", marginLeft: "-1.3rem" }}>
        <img
          src={logo}
          alt="logo"
          width={100}
          height={80}
          style={{ width: "auto" }}
        />
      </div>
      <div>
        {user ? (
          <button onClick={logoutUser}>Logout</button>
        ) : (
          <button onClick={() => navigate("/login")}>Login</button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
