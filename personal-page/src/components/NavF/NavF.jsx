import React from "react";
import { Link } from "react-router-dom";

const NavF = () => {
  return (
    <div>
      <span className="link-to">
        <Link to="/">Main page</Link>
      </span>

      <span className="link-to">
        <Link to="/contact">Contact </Link>
      </span>
    </div>
  );
};

export default NavF;
