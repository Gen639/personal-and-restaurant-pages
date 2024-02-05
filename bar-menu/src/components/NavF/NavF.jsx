import React from "react";
import { Link } from "react-router-dom";
import "./NavF.css";
const NavF = () => {
  return (
    <div>
      <span className="link-to">
        <Link to="/">Main page</Link>
      </span>

      <span className="link-to">
        <Link to="/menu">Menu</Link>
      </span>

      <span className="link-to">
        <Link to="/reserve">Reserve</Link>
      </span>

      {/* <a href="#">Main page</a>
      <a href="#">Menu</a>
      <a href="#">Reserve</a> */}
    </div>
  );
};

export default NavF;
