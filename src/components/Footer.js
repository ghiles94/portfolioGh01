import React from "react";
import { Link } from "react-router-dom";
import { FiGithub, FiLinkedin } from "react-icons/fi";

import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <div className="container">
        <div>Ghlies Hechache &copy; 2023</div>
        <div className="socialMedia">
          <Link to="https://www.linkedin.com/in/ghiles-hechache/">
            <FiLinkedin color="white" />
          </Link>
          <Link to="https://github.com/ghiles94">
            <FiGithub color="white" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
