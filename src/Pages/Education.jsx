import React from "react";
import educationImg from "../assets/educationImg.jpg";
import guviLogo from "../assets/guviLogo.jpg";
import bannariAmmanLogo from "../assets/bannariAmmanLogo.png";
import './education.css'; 

const Education = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <img className="w-100 h-75 overflow-hidden education-img" src={educationImg} alt="" />
          </div>
          <div className="col-6 mt-5">
            <h1 className="text-center my-5">Education</h1>
            <h3 className="text-center">Basic Qualifications and Certifications</h3>
          </div>
        </div>
      </div>
      <div className="container-lg edu">
        <h1 className="text-center">Certification</h1>
        <div className="row">
          <div className="col-3">
            <img className="eduLogo" src={guviLogo} alt="Guvi Logo" />
          </div>
          <div className="col-9">
            <h1>Guvi Geek Network Private Limited</h1>
            <h2>Full Stack Web Development 2024</h2>
            <p className="paras">
              Gained expertise in MERN stack development, building dynamic and
              scalable web applications with MongoDB, Express.js, React, and
              Node.js.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="text-center">
            <h1 className="mt-5">Degrees Received</h1>
          </div>
          <div className="col-3">
            <img className="eduLogo" src={bannariAmmanLogo} alt="Bannari Amman Logo" />
          </div>
          <div className="col-9">
            <h1>Bannari Amman Institute of Technology</h1>
            <h2>Bachelor of Agriculture Engineering 2019-2023</h2>
            <p className="paras">
              Combined agriculture engineering principles with modern technology
              to create solutions for sustainable farming and resource
              management.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-3">
            <div className="eduLogo school-logo">STJ</div>
          </div>
          <div className="col-9">
            <h1>St John's Matriculation Higher Secondary School</h1>
            <h2>HSC - XII (std) (Maths - Computer Science) 2019</h2>
            <p className="paras">
              Strengthened my knowledge in mathematics and computer science,
              preparing me for advanced studies.
            </p>
          </div>
          <div className="row">
            <div className="col-3">
              <div className="eduLogo school-logo">RMS</div>
            </div>
            <div className="col-9">
              <h1>Rose Mary Matriculation Higher Secondary School</h1>
              <h2>SSLC - Xth (std) 2017</h2>
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
