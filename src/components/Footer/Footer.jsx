import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="div-main-links">
      <div className="legal-text">PRIVACY POLICY</div>
      <div className="legal-text"> TERMS OF SERVICE</div>
      <div className="legal-text"> SITE MAP</div>
      <div className="legal-text">
        {" "}
        @2022 CA Startups Inc. All rights reserved
      </div>
      <div className="legal-text"> </div>
    </div>
  );
};

export default Footer;
