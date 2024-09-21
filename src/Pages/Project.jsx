import React from "react";
import projectImg from "../assets/projectImg.jpg";
import wideThoughts from "../assets/wideThoughts.png";
const Project = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <img className="w-100 h-100" src={projectImg} alt="" />
          </div>
          <div className="col-6 m-auto">
            <h1 className="text-center ">Projects</h1>
            <p className="text-center">
              My projects leverage a wide range of modern technologies. I
              specialize in creating dynamic web applications using the MERN
              stack and ensuring their scalability and performance.
            </p>
          </div>
        </div>
      </div>
      <div className="container-lg">
        <div className="row">
          <div className="col-6 mt-5">
            <div className="card">
              <img src={wideThoughts} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-center">Wide Thoughts</h5>
                <p className="card-text">
                  WideThoughts is a platform dedicated to sharing articles on
                  technology and personal development, aiming to inspire and
                  inform readers.
                </p>
                <div className="d-flex justify-content-evenly">
                  <a href="#" className="btn btn-primary w-25">
                    frontend
                  </a>
                  <a href="#" className="btn btn-primary w-25">
                    backend
                  </a>
                  <a href="#" className="btn btn-primary w-25">
                    live
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-6 mt-5">
            <div className="card">
              <img src={wideThoughts} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  WideThoughts is a platform dedicated to sharing articles on
                  technology and personal development, aiming to inspire and
                  inform readers.
                </p>
                <div className="d-flex justify-content-evenly">
                  <a href="#" className="btn btn-primary w-25">
                    frontend
                  </a>
                  <a href="#" className="btn btn-primary w-25">
                    backend
                  </a>
                  <a href="#" className="btn btn-primary w-25">
                    live
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-6 mt-5 mb-lg-5">
            <div className="card">
              <img src={wideThoughts} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  WideThoughts is a platform dedicated to sharing articles on
                  technology and personal development, aiming to inspire and
                  inform readers.
                </p>
                <div className="d-flex justify-content-evenly">
                  <a href="#" className="btn btn-primary w-25">
                    frontend
                  </a>
                  <a href="#" className="btn btn-primary w-25">
                    backend
                  </a>
                  <a href="#" className="btn btn-primary w-25">
                    live
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 mt-5 mb-5">
            <div className="card">
              <img src={wideThoughts} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  WideThoughts is a platform dedicated to sharing articles on
                  technology and personal development, aiming to inspire and
                  inform readers.
                </p>
                <div className="d-flex justify-content-evenly">
                  <a href="#" className="btn btn-primary w-25">
                    frontend
                  </a>
                  <a href="#" className="btn btn-primary w-25">
                    backend
                  </a>
                  <a href="#" className="btn btn-primary w-25">
                    live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
