import React from "react";

function Navbar() {
  return (
    <div>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link active" href="#">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Login
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Sign up
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
