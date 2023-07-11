import { Link } from "react-router-dom";
import React from "react";
import "./Navbar.css";

const links = [
  {
    to: "/",
    title: "Home",
  },
  {
    to: "/projets",
    title: "Projets",
  },
  {
    to: "/temoignages",
    title: "Témoignages",
  },
];

function Navbar() {
  return (
    <div className="navBar">
      <div className="navBarContent">
        <h1>
          <Link className="navBarLogo" to="/">
            H.Ghiles
          </Link>
        </h1>
        <ul className="navBarLinks">
          {links.map((link, index) => (
            <li key={index}>
              <Link to={link.to}>{link.title}</Link>
            </li>
          ))}
          <li>
            <Link to="contact" className="navBarContact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
