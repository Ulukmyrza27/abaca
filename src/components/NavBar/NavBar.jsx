import { Button } from "antd";
import React from "react";
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <div className="navbar-main">
        <Link to="/">
          <div className="logo">CA Startups - ABACA.PRO</div>
        </Link>

        <Link to="#cards">
          <div className="navbar">Invest</div>
        </Link>
        <div className="navbar">Raise</div>
        <div className="navbar"></div>
        <Link to="/">
          <div className="navbar-logo">
            <img
              src="https://cdn.b12.io/client_media/0KPLsAoX/2b9f976c-8979-11eb-a59d-0242ac110002-png-regular_image.png"
              alt=""
            />
          </div>
        </Link>
        <div className="navbar"></div>
        <div className="navbar"></div>
        <div className="navbar"></div>
        <Link to="#insights">
          <div className="navbar">
            <Button className="navbar-button">For startups</Button>
          </div>
        </Link>
        <Link to="Login">
          <div className="navbar">Sign in / Sign up</div>
        </Link>
        {/* <div className="navbar">Sign up</div> */}
      </div>
    </>
  );
};

export default NavBar;
