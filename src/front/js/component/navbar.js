import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {

  const handleClick = () => {
    localStorage.removeItem("token")
  }

  return (
    <nav className="navbar navbar-light bg-warning">
      <div className="container">
        <div className="ml-auto">
          <Link to="/">
            <button className="btn btn-primary">Register</button>
          </Link>
        </div>
        <div className="ml-auto">
          <Link to="/login">
            <button
              onClick={handleClick}
              className="btn btn-primary"
            >
              {localStorage.length > 0 ? <p className="mb-0"> Logout</p> : <p className="mb-0"> Login</p>}
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
