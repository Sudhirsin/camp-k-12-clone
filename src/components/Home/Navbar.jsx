import React from "react";
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <React.Fragment>
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
                  to = "/onlineCourses"
                  className="nav-link text-white font-weight-ligther">
                  ONLINE COURSES <span className="sr-only">(current)</span>
                </Link>
              </li>
            </ul>

            <form className="form-inline my-2 my-lg-0 ml-auto">
              <img
                className="mx-2"
                src="/images/leaderboard.svg"
                alt="Leaderboard Icon"
              />
              <div className="notification">
                <img
                  className="mx-2"
                  src="/images/landing_page/notification.svg"
                  alt="Notification Icon"
                />
                <span className="badge">2</span>
              </div>
              <div className="score mx-2 d-flex justify-content-between align-items-center">
                <img className="ml-2 " src="/images/landing_page/shield.svg" />
                <span className="text-white font-weight-bold">100</span>
                <img src="/images/leaderboard.svg" alt="" />
              </div>
              <img src="/images/landing_page/chevron_down.svg" alt="" />
            </form>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
}

export default Navbar;
