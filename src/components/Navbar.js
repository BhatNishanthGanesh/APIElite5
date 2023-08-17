import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <div>
      <nav>
        <div className=" blue-grey lighten-1 nav-wrapper">
          <a  href="#"  className="black-text text-darken-2 brand-logo">
            <strong  >Logo</strong>
          </a>
          <ul id="nav-mobile" className=" right hide-on-med-and-down">
            <li>
              <strong><a className="medium black-text text-darken-2" href="#">API DOC</a></strong>
            </li>
            <li>
              <strong><a className="black-text text-darken-2" href="#">ABOUT</a></strong>
            </li>
            
            <li>
             <strong> <a className="black-text text-darken-2" href="#">My Questions</a></strong>
            </li>
            <li>
              <strong><a className="black-text text-darken-2" href="#"><i className="large material-icons">account_circle</i></a></strong>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
