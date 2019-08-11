// src/components/NavBar.js

import React from "react";
import { useAuth0 } from "../../reatct-auth0-wapper";
import { Link } from "react-router-dom";
const HomePage = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {/* {!isAuthenticated && (
          <button onClick={() => loginWithRedirect({})}>Log in</button>
        )} */}
      {/* 
        {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
        {isAuthenticated && <Link to="/profile">Profile</Link>}
        {isAuthenticated && <Link to="/secret">Secret</Link>} */}

      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <a href="/" className="navbar-brand">
          Navbar
        </a>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home{" "}
              </Link>
            </li>
            {!isAuthenticated && (
              <li className="nav-item">
                <Link
                  className="nav-link"
                  onClick={() => loginWithRedirect({})}
                >
                  Login
                </Link>
              </li>
            )}
            {isAuthenticated && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/secret">
                    Secret
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/add-task">
                    ADD TASK
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/" onClick={() => logout()}>
                    logout
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default HomePage;
