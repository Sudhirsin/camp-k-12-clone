import React, { Component } from 'react'
import Navbar from './Navbar'
import BannerCards from './BannerCards'
import CoursesCards from './CoursesCards'
import GradeButton from './GradeButton'


export default class OnlineCourse extends Component {
  constructor(props) {
    super(props)
    this.state = {
        bannerCards: [
          {
            img: "/images/woman.svg",
            label: "Learn interactively.",
            text1: "LIVE online session with our",
            text2: "expert mentors. See a demo"
          },

          {
            img: "/images/learn-from-anywhere.svg",
            label: "Learn from anywhere.",
            text1: "Convenience and safety for you",
            text2: "and your child"
          },
          
          {
            img: "/images/learn-from-pioneers.svg",
            label: "Learn Learn from the pioneers.",
            text1: "We'hv been teaching kids to",
            text2: "code since 2010. "
          },

          {
            img: "/images/learn-by-doing.svg",
            label: "Learn by doing.",
            text1: "100% project-based curriculum.",
            text2: "Solve real-world problems"
          }

        ],
        
        btnGrades: ["1 - 4", "5 - 8", "9 - 12"]
        
    }
  }
  
  render() {
    return (
      <React.Fragment>
  
        <div className="container-fuild">
  
          {/* background header for online courses */}
          <div className="course-container">
            
            {/* Navbar */}
            <Navbar />
  
            {/* online course heading  */}
            <div className="container">
                <h3 className="text-white online-courses">ONLINE COURSES</h3>
                <div className="row py-4">
                  {this.state.bannerCards.map(card => {
                    return (
                      <BannerCards 
                        img = {card.img}
                        label = {card.label}
                        text1 = {card.text1}
                        text2 = {card.text2}
                      />
                    )
                  })}

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
                {this.state.btnGrades.map((grade, i) => {
                  if (i === 1) {
                    return (
                      <GradeButton 
                        grades = {grade}
                        bgColor = "bg-primary"
                      />
                    )
                  } else {
                    return (
                      <GradeButton 
                        grades = {grade}
                        bgColor = "bg-white"
                      />
                    )
                  }
                })}
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
              <CoursesCards />
              <CoursesCards />
              <CoursesCards />
            </div>

            <div className="d-flex justify-content-between mt-4">
              <CoursesCards />
              <CoursesCards />
              <CoursesCards />
            </div>
          </div>
        </div>
  
      </React.Fragment>
    );
  }
}
