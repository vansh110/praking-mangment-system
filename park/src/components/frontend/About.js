import React from "react";

// import { Link } from 'react-router-dom'


import './about.css'


function About() {
  return (
    <div className="about-us">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="about-img md-6">
              <img src="../../images/st.jpg" className="img-fluid" alt="" />
              <img src="../../images/st2.jpg" className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-content">
              <div className="about-sub-heading">
                <h5>Strategic Alliance</h5>
              </div>
              <h2>
              Offshore Software Development, Software Outsourcing, Custom Software Development Services <br />
               
              </h2>
              <p>
              Strategic Alliance specializes in the business of providing Software Outsourcing & Offshore Software Development services to its clients globally. Our expertise lies in reducing costs and enhancing productivity by bringing the strategic advantage of Software Outsourcing and Offshore Software Development to the very doorsteps of our customers in more ways than one. By improving reliability, speed and agility, we enable our customers to achieve sustainable differential advantage over their competitors.
              </p>
              
              <p>
              Our engagement models are flexible, scalable, secure and custom defined based on specific individual needs of our customers. With this we ensure that we follow the right strategy to ensure business transformation, lower operational costs and quick time to market. We ensure 100% success for our customers business and in the process, ensure business continuity for ourselves.
              </p>
            </div>
            <div className="row">
            
              <div className="col-md-6">
              <h3>Services</h3>
                <div className="about-sub">
                  <h6><i className="fa fa-check"></i> Software Development</h6>
                  <h6><i className="fa fa-check"></i> Website Development</h6>
                  <h6><i className="fa fa-check"></i>Management Services</h6>
                  <h6><i className="fa fa-check"></i>Database Development</h6>
                  <h6><i className="fa fa-check"></i>Datawarehousing</h6>
                </div>
                
              </div>
              
              <div className="col-md-6">
              <h3>Products</h3>
                <div className="about-sub">
                  <h6><i className="fa fa-check"></i>RetailMate</h6>
                  <h6><i className="fa fa-check"></i>KingMaker</h6>
                  <h6><i className="fa fa-check"></i>GrocerMate</h6>
                  <h6><i className="fa fa-check"></i>TimeKing</h6>
                </div>
              </div>
            </div>
            <a href="https://www.strategic-alliance.net/" className="btn1">Read More</a>
          </div>
        </div>
      </div>
    </div>

  


  )
}

export default About;