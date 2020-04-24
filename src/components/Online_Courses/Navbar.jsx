import React from "react";
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg">
        <img
          className="CampK12-Logo"
          src="/images/camp-k-12-logo.svg"
          alt="logo"
        />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <Link 
                    to = "/"
                    className="nav-link text-white font-weight-ligther"
                >
                    HOME 
                </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white font-weight-ligther">
                ONLINE COURSES <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item text-white font-weight-ligther">
              <a className="nav-link text-white" href="#">
                OFFLINE CAMPS
              </a>
            </li>

            <li className="nav-item text-white font-weight-ligther">
              <a className="nav-link text-white" href="#">
                REFER & EARN
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <img className="mx-2" src="/images/leaderboard.svg" alt="" />
            <button className="btn navbar-btn mx-2 text-white">
              FREE TRAIL
            </button>
            <button className="btn navbar-btn mx-2 text-white">LOGIN</button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
