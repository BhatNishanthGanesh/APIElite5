import React from "react";
import "./navbar.css";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <div>
      <nav>
        <div className=" blue-grey lighten-1 nav-wrapper">
          <a href="#" className="black-text text-darken-2 brand-logo">
            <strong>Logo</strong>
          </a>
          <ul id="nav-mobile" className=" right hide-on-med-and-down">
            <li>
              <strong>
                <a className="medium black-text text-darken-2" href="#">
                  API DOC
                </a>
              </strong>
            </li>
            <li>
              <strong>
                <a className="black-text text-darken-2" href="#">
                  ABOUT
                </a>
              </strong>
            </li>

            <li>
              <strong>
                {" "}
                <a className="black-text text-darken-2" href="#">
                  My Questions
                </a>
              </strong>
            </li>
            {isAuthenticated ? (
              <>
                <li >
                  <img  src={user.picture} alt={user.name} 
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      marginRight: '10px',
                    }}
                  />
                </li>
                <li>
                  <button className="white btn"
                    onClick={() =>
                      logout({
                        logoutParams: { returnTo: window.location.origin },
                      })
                    }
                    style={{
                      background: 'none',
                      border: '1px solid #ccc',
                      padding: '5px 10px',
                      cursor: 'pointer',
                    }}
                  >
                    <strong>Log Out</strong>
                  </button>
                </li>
              </>
            ) : (
              <li>
                <button className="white btn" onClick={() => loginWithRedirect()}
                style={{
                  background: 'none',
                  border: '1px solid #ccc',
                  padding: '5px 10px',
                  cursor: 'pointer',
                }}
                >
                  <strong>Log In</strong>
                </button>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
