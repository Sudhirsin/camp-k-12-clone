import React from "react";
import { Link } from 'react-router-dom'

function Home() {
  return (
    <React.Fragment>

      <div className="container-fuild">

        {/* background header for online courses */}
        <div className="course-container">
          
          {/* Navbar */}
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
                    <a className="nav-link text-white font-weight-ligther" href="#">
                      ONLINE COURSES <span className="sr-only">(current)</span>
                    </a>
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
          {/* Navbar */}

          {/* online course heading  */}
          <div className="container">
              <h3 className="text-white online-courses">ONLINE COURSES</h3>
              <div className="row py-4">
                  <div className="col-lg">
                    <img className="mb-3" src="/images/woman.svg" alt="woman"/>
                    <h6 className="font-weight-bold text-white">Learn interactively.</h6>
                    <small className="text-white online-classes">LIVE online session with our <br />
                      expert mentors. See a demo
                    </small>
                  </div>

                  <div className="col-lg">
                    <img className="mb-3" src="/images/learn-from-anywhere.svg" alt="Learn from anywhere"/>
                    <h6 className="font-weight-bold text-white">Learn from anywhere.</h6>
                    <small className="text-white online-classes">Convenience and safety for you<br />
                      and your child
                    </small>
                  </div>

                  <div className="col-lg">
                    <img className="mb-3" src="/images/learn-from-pioneers.svg" alt="Learn by doing"/>
                    <h6 className="font-weight-bold text-white">Learn Learn from the pioneers.</h6>
                    <small className="text-white online-classes">We'hv been teaching kids to <br />
                      code since 2010.  
                      <Link className="text-white">
                        <u>Read More</u>
                      </Link>
                    </small>
                  </div>

                  <div className="col-lg">
                    <img className="mb-3" src="/images/learn-by-doing.svg" alt="Learn by doing"/>
                    <h6 className="font-weight-bold text-white">Learn by doing.</h6>
                    <small className="text-white online-classes">100% project-based curriculum.<br />
                      Solve real-world problems
                    </small>
                  </div>
              </div>
              <div className="row mt-3">
                <div className="col-g">
                  <button className="btn free-trail-btn text-white">
                    <small>
                      BOOK A FREE TRAIL
                    </small>
                  </button>
                </div>
              </div>
          </div>
        </div>
      </div>

      {/* card main container */}
      <div className="container-fluid card-container">
        <div className="container bg-white p-5 position-relative card-area">
          
          <div className="row position-absolute grades-btn">
            <div className="btn-group shadow" role="group" aria-label="Basic example">
              <button class="btn bg-white grades text-dark font-weight-light">Grades 1 - 4</button>
              <button class="btn btn-primary grades font-weight-light">Grades 5 - 8</button>
              <button class="btn bg-white grades text-dark font-weight-light">Grades 9 - 12</button>
            </div>
          </div>
          
          <div className="d-flex justify-content-between mb-3">
            <p className="course-grade-text">
              Showing <b>All</b> courses for <b>Grades 5 - 8</b> 
            </p>
            <div>
              <select className="form-control filter-grades">
                <option className="course-grade-text">All Courses</option>
              </select>
            </div>
          </div>

          {/* showing cards */}
          <div className="d-flex justify-content-between">
            {/* card -1 */}
            <div>
              <div class="card" style={{width: "330px", height: "450px"}}>
                <div className="card-backgroud"></div>
                <div class="card-body">
                  <h6 class="card-title font-weight-bold">Al & Machine Learning:<br />
                    Code Intelligent Bots
                  </h6>
                  <div className="small">
                    <span className="text-muted small">LEVEL</span>  <b>&nbsp;1</b>
                    <span className="text-muted small ml-4">GRADES </span> <b>  &nbsp;5 - 8</b>  
                  </div>
                  
                  <hr />
                  <div className="card-mid-text">
                    
                    {/* Happy Student */}
                    <img className="mr-3" src="/images/path-happy-student.svg" alt="Happy student path"/>
                    <b>5.6k</b>
                    <span className="text-muted"> Happy Students </span>
                    <br />

                    {/* session hours */}
                    <img className="mr-4" src="/images/session-hours.svg" alt="Happy student path"/>
                    <b>12 Hours</b>
                    <span className="text-muted"> over 6 Sessions</span>
                    <br />

                    {/*  weekend batches*/}
                    <img className="mr-3" src="/images/group.svg" alt="Happy student path"/>
                    <span className="text-muted"> Weekend and Weekdays Batches</span>
                  </div>

                  <div className="d-flex justify-content-between my-3">
                    <div>
                      <img src="/images/rupees-icon.svg" alt="Rupees Icon"/>
                      <span>
                        <b className="ml-2">9999</b>
                        <del className="text-muted small ml-2">12000</del>
                      </span>
                    </div>
                    <div>
                      <img src="/images/offers-percentage.svg" alt="Offers"/>
                      <span className="course-grade-text ml-2 offer-text">
                        16% off
                      </span>
                    </div>
                  </div>

                  <hr />
                  <div className="text-center learn-more-link">
                    <Link className="text-center">LEARN MORE</Link>

                  </div>
                  
                </div>
              </div>
            </div>

            {/* card -2 */}
            <div>
              <div class="card" style={{width: "330px", height: "450px"}}>
                <div className="card-backgroud"></div>
                <div class="card-body">
                  <h6 class="card-title font-weight-bold">Al & Machine Learning:<br />
                    Code Intelligent Bots
                  </h6>
                  <div className="small">
                    <span className="text-muted small">LEVEL</span>  <b>&nbsp;1</b>
                    <span className="text-muted small ml-4">GRADES </span> <b>  &nbsp;5 - 8</b>  
                  </div>
                  
                  <hr />
                  <div className="card-mid-text">
                    
                    {/* Happy Student */}
                    <img className="mr-3" src="/images/path-happy-student.svg" alt="Happy student path"/>
                    <b>5.6k</b>
                    <span className="text-muted"> Happy Students </span>
                    <br />

                    {/* session hours */}
                    <img className="mr-4" src="/images/session-hours.svg" alt="Happy student path"/>
                    <b>12 Hours</b>
                    <span className="text-muted"> over 6 Sessions</span>
                    <br />

                    {/*  weekend batches*/}
                    <img className="mr-3" src="/images/group.svg" alt="Happy student path"/>
                    <span className="text-muted"> Weekend and Weekdays Batches</span>
                  </div>

                  <div className="d-flex justify-content-between my-3">
                    <div>
                      <img src="/images/rupees-icon.svg" alt="Rupees Icon"/>
                      <span>
                        <b className="ml-2">9999</b>
                        <del className="text-muted small ml-2">12000</del>
                      </span>
                    </div>
                    <div>
                      <img src="/images/offers-percentage.svg" alt="Offers"/>
                      <span className="course-grade-text ml-2 offer-text">
                        16% off
                      </span>
                    </div>
                  </div>

                  <hr />
                  <div className="text-center learn-more-link">
                    <Link className="text-center">LEARN MORE</Link>

                  </div>
                  
                </div>
              </div>
            </div>

            {/* card -3 */}
            <div>
              <div class="card" style={{width: "330px", height: "450px"}}>
                <div className="card-backgroud"></div>
                <div class="card-body">
                  <h6 class="card-title font-weight-bold">Al & Machine Learning:<br />
                    Code Intelligent Bots
                  </h6>
                  <div className="small">
                    <span className="text-muted small">LEVEL</span>  <b>&nbsp;1</b>
                    <span className="text-muted small ml-4">GRADES </span> <b>  &nbsp;5 - 8</b>  
                  </div>
                  
                  <hr />
                  <div className="card-mid-text">
                    
                    {/* Happy Student */}
                    <img className="mr-3" src="/images/path-happy-student.svg" alt="Happy student path"/>
                    <b>5.6k</b>
                    <span className="text-muted"> Happy Students </span>
                    <br />

                    {/* session hours */}
                    <img className="mr-4" src="/images/session-hours.svg" alt="Happy student path"/>
                    <b>12 Hours</b>
                    <span className="text-muted"> over 6 Sessions</span>
                    <br />

                    {/*  weekend batches*/}
                    <img className="mr-3" src="/images/group.svg" alt="Happy student path"/>
                    <span className="text-muted"> Weekend and Weekdays Batches</span>
                  </div>

                  <div className="d-flex justify-content-between my-3">
                    <div>
                      <img src="/images/rupees-icon.svg" alt="Rupees Icon"/>
                      <span>
                        <b className="ml-2">9999</b>
                        <del className="text-muted small ml-2">12000</del>
                      </span>
                    </div>
                    <div>
                      <img src="/images/offers-percentage.svg" alt="Offers"/>
                      <span className="course-grade-text ml-2 offer-text">
                        16% off
                      </span>
                    </div>
                  </div>

                  <hr />
                  <div className="text-center learn-more-link">
                    <Link className="text-center">LEARN MORE</Link>

                  </div>
                  
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>

    </React.Fragment>
  );
}

export default Home;
