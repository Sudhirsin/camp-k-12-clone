import React from "react";
import { Link } from 'react-router-dom'

function CoursesCards() {
  return (
    <div>
      <div class="card" style={{ width: "330px", height: "450px" }}>
        <div className="card-backgroud"></div>
        <div class="card-body">
          <h6 class="card-title font-weight-bold">
            Al & Machine Learning:
            <br />
            Code Intelligent Bots
          </h6>
          <div className="small">
            <span className="text-muted small">LEVEL</span> <b>&nbsp;1</b>
            <span className="text-muted small ml-4">GRADES </span>{" "}
            <b> &nbsp;5 - 8</b>
          </div>

          <hr />
          <div className="card-mid-text">
            {/* Happy Student */}
            <img
              className="mr-3"
              src="/images/path-happy-student.svg"
              alt="Happy student path"
            />
            <b>5.6k</b>
            <span className="text-muted"> Happy Students </span>
            <br />

            {/* session hours */}
            <img
              className="mr-4"
              src="/images/session-hours.svg"
              alt="Happy student path"
            />
            <b>12 Hours</b>
            <span className="text-muted"> over 6 Sessions</span>
            <br />

            {/*  weekend batches*/}
            <img
              className="mr-3"
              src="/images/group.svg"
              alt="Happy student path"
            />
            <span className="text-muted"> Weekend and Weekdays Batches</span>
          </div>

          <div className="d-flex justify-content-between my-3">
            <div>
              <img src="/images/rupees-icon.svg" alt="Rupees Icon" />
              <span>
                <b className="ml-2">9999</b>
                <del className="text-muted small ml-2">12000</del>
              </span>
            </div>
            <div>
              <img src="/images/offers-percentage.svg" alt="Offers" />
              <span className="course-grade-text ml-2 offer-text">16% off</span>
            </div>
          </div>

          <hr />
          <div className="text-center learn-more-link">
            <Link className="text-center">LEARN MORE</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursesCards;

