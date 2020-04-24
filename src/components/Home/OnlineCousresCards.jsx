import React from "react";
import { Link } from 'react-router-dom'

function OnlineCousresCards(props) {
  return (
    <div className="col-lg">
      <div class="card" style={{ width: "288px", height: "575px" }}>
        <div className="card-backgroud-online"></div>
        <div class="card-body">
          <h6 class="card-title font-weight-bold">
            {props.name}
          </h6>
          <hr />
          <div className="d-flex justify-content-between">
            <div>
              <img src="/images/landing_page/grades.svg" alt="Grades" />
              <span className="text-muted small ml-2">GRADES</span>
              <br />
              <span className="small ml-4">
                <b>{props.grades}</b>
              </span>
            </div>
            <div>
              <img src="/images/landing_page/pre-req.svg" alt="Pre Req" />
              <span className="text-muted small ml-2">PRE-REQ </span>
              <br />
              <span className="small ml-4">
                <b>{props.pre_req}</b>
              </span>
            </div>
          </div>

          <hr />
          <div>
            <img src="/images/landing_page/skill-icon.svg" alt="Skill Icon" />
            <span className="card-green">{props.span1}</span>{" "}
            <span className="card-green">{props.span2}</span>{" "}
            <span className="card-green">{props.span3}</span>
          </div>
          <div className="mt-2">
            <img src="/images/landing_page/small-coin.svg" alt="Coin" />
            <span className="card-yellow">+1000</span>
          </div>

          <hr />
          <div className="card-mid-text">
            <img
              className="mr-3"
              src="/images/landing_page/calender.svg"
              alt="Happy student path"
            />
            <span className="text-muted"> 17th Feb (in 4 days)</span>
            <br />

            <img
              className="mr-4"
              src="/images/landing_page/days-icon.svg"
              alt="Happy student path"
            />
            <span className="text-muted"> Mon, Tue & Wed</span>
            <br />

            <img
              className="mr-3"
              src="/images/landing_page/time.svg"
              alt="Happy student path"
            />
            <span className="text-muted"> 6:00PM to 7:00PM</span>
          </div>

          <hr />
          <div className="text-center learn-more-link d-flex justify-content-between">
            <div className="font-weight-bold">Rs. {props.price}</div>
            <div>
              <Link className="text-center">ENROLL</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnlineCousresCards;
