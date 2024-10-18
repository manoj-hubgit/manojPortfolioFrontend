import React from "react";
import educationImg from "../assets/educationImg.jpg";
import guviLogo from "../assets/guviLogo.jpg";
import bannariAmmanLogo from "../assets/bannariAmmanLogo.png";
import './education.css'; 
import "./font.css";

const Education = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row flex-column-reverse flex-md-row">
          <div className="col-md-6 col-sm-12">
            <img className="w-100 h-75 overflow-hidden education-img" src={educationImg} alt="books" />
          </div>
          <div className="col-md-6 text-center col-sm-12 mt-md-5 edu-text">
            <h1 className="my-md-4 fw-bolder titleFonts">Education</h1>
            <h3 className="subTitleFonts fw-bolder">Basic Qualifications and Certifications</h3>
          </div>
        </div>
      </div>
      <div className="container-lg edu mb-4">
        <h1 className="text-center titleFonts mb-3">Certification</h1>
        <div className="row">
          <div className="col-3">
            <img className="eduLogo d-none d-md-block school-logo " src={guviLogo} alt="Guvi Logo" />
          </div>
          <div className="col-md-9 col-sm-12 mx-md-0 mx-sm-2">
            <h1 className="titleFonts">Guvi Geek Network Private Limited</h1>
            <h2 className="subTitleFonts">Full Stack Web Development 2024</h2>
            <p className="paras">
              Gained expertise in MERN stack development, building dynamic and
              scalable web applications with MongoDB, Express.js, React, and
              Node.js.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="text-center">
            <h1 className="mt-5 mb-3 titleFonts">Degrees Received</h1>
          </div>
          <div className="col-3 d-none d-md-block">
            <img className="eduLogo school-logo" src={bannariAmmanLogo} alt="Bannari Amman Logo" />
          </div>
          <div className="col-md-9 col-sm-12 mx-md-0 mx-sm-2">
            <h1 className="titleFonts">Bannari Amman Institute of Technology</h1>
            <h2 className="subTitleFonts">Bachelor of Agriculture Engineering 2019-2023</h2>
            <p className="paras">
              Combined agriculture engineering principles with modern technology
              to create solutions for sustainable farming and resource
              management.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-3 d-none d-md-block">
            <div className="eduLogo titleFonts school-logo">STJ</div>
          </div>
          <div className="col-md-9 col-sm-12 mx-md-0 mx-sm-2">
            <h1 className="titleFonts">St John's Matriculation Higher Secondary School</h1>
            <h2 className="subTitleFonts">HSC - XII (std) (Maths - Computer Science) 2019</h2>
            <p className="paras">
              Strengthened my knowledge in mathematics and computer science,
              preparing me for advanced studies.
            </p>
          </div>
          <div className="row">
            <div className="col-3 d-none d-md-block">
              <div className="eduLogo titleFonts school-logo">RMS</div>
            </div>
            <div className="col-md-9 col-sm-12 mx-md-0 mx-sm-2">
              <h1 className="titleFonts">Rose Mary Matriculation Higher Secondary School</h1>
              <h2 className="subTitleFonts">SSLC - Xth (std) 2017</h2>
              <p className="paras">
                Developed a solid foundation in core subjects, enhancing my
                analytical and problem-solving skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
