import React from "react";
import Navbar from "./Navbar";
import { Link } from 'react-router-dom'

function Home() {
  return (
    <React.Fragment>

      <div className="container-fuild">

        {/* background header for online courses */}
        <div className="showcase">
          
          {/* Navbar */}
            <Navbar />

          {/* banner  */}
          <div className="container banner mt-5">
            <div className="d-flex justify-content-between">
              <div>
                <p>Welcome to the <br />
                  school of the future.
                </p>
                <br />
                <br />
                <span className="text-white">Cutting-edge technology courses for Ages 8-18. <br />
                    Unlock <span className="banner-skill-text">21st century skills, </span>earn <img src="/images/landing_page/coins.svg" alt="coins icon"/>, and build <br />
                    a college-ready portfolio as you learn.
                </span>
              </div>
              <div>
                <img className="boy-photo" src="/images/landing_page/header-photo.jpg" alt="Boys Image"/>
              </div>
            </div>
          </div>

          {/* tech stack */}
          <div className="container mt-5 pt-3">
            <h3 className="text-center text-white">What do you want to learn?</h3>
            <div className="row my-5 pt-2">
              <div className="col-lg d-flex justify-content-center align-items-center">
                <div className="techstack-arrow">
                  <img src="/images/landing_page/arrow-left.svg" alt="Arrow Left"/>
                </div>
              </div>
              <div className="col-lg mx-2 card-tech-stack bg-white">
                <img src="images/landing_page/web-development.svg" alt="Web Development"/>
                <p className="tex-dark mt-4 font-weight-light">Web Development</p>
              </div>

              <div className="col-lg mx-2 card-tech-stack bg-white">
                <img src="images/landing_page/mobile-app.svg" alt="Mobile App Development"/>
                <p className="tex-dark mt-4 font-weight-light">Mobile App Development</p>
              </div>

              <div className="col-lg mx-2 card-tech-stack bg-white">
                <img src="images/landing_page/ar-vr.svg" alt="Mobile Reality"/>
                <p className="tex-dark mt-4 font-weight-light">Mobile Reality (AR / VR)</p>
              </div>

              <div className="col-lg mx-2 card-tech-stack bg-white">
                <img src="images/landing_page/machine-learning.svg" alt="Machine Learning"/>
                <p className="mt-4 font-weight-light">Machine Learning (AI)</p>
              </div>
              <div className="col-lg col-lg d-flex justify-content-center align-items-center">
                <div className="techstack-arrow">
                  <img src="/images/landing_page/arrow-right.svg" alt="Arrow Right"/>
                </div>
              </div>
            </div>
          </div>
          {/* tech stack end */}


        </div>
      </div>

      {/* upcoming online courses */}
      <div className="upcoming-courses-container fluid-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center align-items-center">
              <div className="online-courses-text">Upcoming online courses</div>
              <div className="badge live-btn ml-4">
                  <div></div>
                  LIVE
                </div> 
            </div>

            <div className="col-lg-12 mt-2">
              <p className="k">Learn from live teachers, not pre-recorded videos, in our intelligent virtual classrooms <br />
              <img src="/images/landing_page/shield.svg" alt="Shield"/> = 21st century skills you'll unlock &nbsp; &nbsp; &nbsp; <img src="/images/landing_page/small-coin.svg" alt="Coins"/> = coins you'll earn for completion
              </p>
            </div>
          </div>
        </div>

        {/* online courses card section */}
        <div className="container">
          <div className="row">
            <div className="col-lg mx-5">
              <div class="card" style={{width: "288px", height:"575px"}}>
                <div className="card-backgroud-online"></div>
                <div class="card-body">
                  <h6 class="card-title font-weight-bold">Android App Development<br />
                    Level 1
                  </h6>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <div>
                      <img src="/images/landing_page/grades.svg" alt="Grades"/>
                      <span className="text-muted small ml-2">GRADES</span>
                      <br />
                      <span className="small ml-4"><b>4 - 8</b></span>
                    </div>
                    <div>
                      <img src="/images/landing_page/pre-req.svg" alt="Pre Req"/>
                      <span className="text-muted small ml-2">PRE-REQ </span>
                      <br />
                      <span className="small ml-4"><b>Yes</b></span>
                    </div>
                  </div>
                  
                  <hr />
                  <div>
                    <img src="/images/landing_page/skill-icon.svg" alt="Skill Icon"/>
                    <span className="card-green">ANDROID</span> <span className="card-green">UI/UX</span> <span className="card-green">+4</span>
                  </div>
                  <div className="mt-2">
                    <img src="/images/landing_page/small-coin.svg" alt="Coin"/>
                    <span className="card-yellow">+1000</span>
                  </div>

                  <hr />
                  <div className="card-mid-text">
                    
                    {/* Happy Student */}
                    <img className="mr-3" src="/images/landing_page/calender.svg" alt="Happy student path"/>
                    <span className="text-muted"> 17th Feb (in 4 days)</span>
                    <br />

                    {/* session hours */}
                    <img className="mr-4" src="/images/landing_page/days-icon.svg" alt="Happy student path"/>
                    <span className="text-muted"> Mon, Tue & Wed</span>
                    <br />

                    {/*  weekend batches*/}
                    <img className="mr-3" src="/images/landing_page/time.svg" alt="Happy student path"/>
                    <span className="text-muted"> 6:00PM to 7:00PM</span>
                  </div>

                  <hr />
                  <div className="text-center learn-more-link d-flex justify-content-between">
                    <div className="font-weight-bold">Rs. 6,000</div>
                    <div>
                      <Link className="text-center">ENROLL</Link>
                    </div>
                    
                  </div>
                  
                </div>
              </div>
            </div>
            <div className="col-lg"></div>
            <div className="col-lg"></div>
          </div>
        </div>

      </div>

      <div className="container-fluid footer">
        <div className="d-flex justify-content-center align-items-center">
          <div className="text-white">
           Question? Contact us at <b>info@campk12.com</b>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
