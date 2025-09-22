import {useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import About from "./About";

const Header = () => {

  const [btnName,setBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          alt="Company Logo"
          src={LOGO_URL}
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>  
          </li>
          <li>
            <Link to="/About">About Us</Link>
          </li>
          <li>
            <Link to="/Contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button className="login" onClick={()=>{
            btnName === "Login"
            ? setBtnName("Logout")
            : setBtnName("Login");
          }}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;