import React from "react";

function Navbar() {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">
            <strong>Logo</strong>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">Sign up</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
