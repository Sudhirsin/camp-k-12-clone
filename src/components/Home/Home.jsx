import React, { Component } from 'react'
import Navbar from "./Navbar";
import { Link } from 'react-router-dom'
import TechStackCard from './TechStackCard';
import OnlineCousresCards from './OnlineCousresCards';
import Footer from './Footer';



export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
          techstack: [
            {
              img: "images/landing_page/web-development.svg",
              name: "Web Development"
            },
            {
              img: "images/landing_page/mobile-app.svg",
              name: "Mobile App Development"
            },
            {
              img: "images/landing_page/ar-vr.svg",
              name: "Mobile Reality (AR / VR)"
            },
            {
              img: "images/landing_page/machine-learning.svg",
              name: "Machine Learning (AI)"
            },

          ],

          onlineCourseCards: [
            {
              name: "Android App Development Level 1",
              grades: "4 - 8",
              pre_req: "Yes",
              price: 6000,
              img: '/images/landing_page/android.jpg',
              span1: "ANDROID",
              span2: "UI / UX",
              span3: "+4" ,
              level: "Level 1"
              
            },
            {
              name: "Web Development Level 1",
              grades: "4 - 12",
              pre_req: "No",
              price: 6000,
              img: '/images/landing_page/webdevelopment.jpeg',
              span1: "HTML",
              span2: "CSS",
              span3: "+1" ,
              level: "Level 1"
            },
            {
              name: "Virtual Reality Level 1",
              grades: "5 - 12",
              pre_req: "Yes",
              price: 8000,
              img: '/images/landing_page/virtual-reality.jpg',
              span1: "VR",
              span2: "JAVASCRIPT",
              span3: "+4" ,
              level: "Level 1"
            },

          ]
    }
  }
  

  render() {
    console.log(this.state.techstack)
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

                {this.state.techstack.map(card => {
                  return (
                    <TechStackCard
                       img = {card.img}
                       name = {card.name}
                    />
                  )
                })}
                
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
            <div className="row mt-3">
            <div className="col-lg"></div>
              {this.state.onlineCourseCards.map(card => {
                return (
                  <OnlineCousresCards 
                    name = {card.name}
                    grades = {card.grades}
                    pre_req = {card.pre_req}
                    price = {card.price}
                    img = {card.img}
                    span1 = {card.span1}
                    span2 = {card.span2}
                    span3 = {card.span3}
                    level = {card.level}
                  />
                )
              })}
              <div className="col-lg"></div>
            </div>
          </div>
  
        </div>
              
        {/* Footer */}
        <Footer />
        
      </React.Fragment>
    );
  }
}
