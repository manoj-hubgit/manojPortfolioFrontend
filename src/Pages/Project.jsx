import React from "react";
import projectImg from "../assets/projectImg.jpg";
import wideThoughts from "../assets/wideThoughts.png";
import Ecommerce from "../assets/ecommerceSsImg.png";
import BillHub from "../assets/BillHubSsImg.png";
import "./project.css";
import "./font.css";
const Project = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <img className="w-100 h-100" src={projectImg} alt="" />
          </div>
          <div className="col-md-6 col-sm-12 m-auto">
            <h1 className="text-center titleFonts">Projects</h1>
            <p className="text-center paragraphs">
              My projects leverage a wide range of modern technologies. I
              specialize in creating dynamic web applications using the MERN
              stack and ensuring their scalability and performance.
            </p>
          </div>
        </div>
      </div>
      <div className="container-lg">
        <div className="row">
          <div className="col-md-6 col-sm-12 mt-5">
            <div className="card">
              <img
                src={wideThoughts}
                className="card-img-top"
                alt="Wide Thoughts"
              />
              <div className="card-body">
                <h5 className="card-title text-center subTitleFonts ">
                  Wide Thoughts
                </h5>
                <p className="card-text paragraphs">
                  WideThoughts is a platform dedicated to sharing insightful
                  articles on technology and personal development, aiming to
                  inspire and inform readers. By offering diverse content, it
                  encourages curiosity, discussions, and personal growth.
                </p>
                <div className="d-flex justify-content-evenly flex-wrap">
                  <a
                    href="https://github.com/manoj-hubgit/widethoughts-frontend"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btnclass mb-2"
                  >
                    Frontend
                  </a>
                  <a
                    href="https://github.com/manoj-hubgit/widethoughts-backend"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btnclass mb-2"
                  >
                    Backend
                  </a>
                  <a
                    href="https://widethoughts.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btnclass mb-2"
                  >
                    Go Live
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-sm-12 mt-5">s
            <div className="card">
              <img src={BillHub} className="card-img-top" alt="BillHub" />
              <div className="card-body">
                <h5 className="card-title text-center subTitleFonts">
                  BillHub
                </h5>
                <p className="card-text paragraphs">
                  BillHub is a billing platform for small shops, streamlining
                  invoicing and data management. It simplifies billing,
                  generates accurate bills, and boosts operational efficiency
                  with user-friendly features.
                </p>
                <div className="d-flex justify-content-evenly flex-wrap">
                  <a
                    href="https://github.com/manoj-hubgit/BillingApplicationFrontend"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btnclass mb-2"
                  >
                    Frontend
                  </a>
                  <a
                    href="https://github.com/manoj-hubgit/BillingApplicationBackend"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btnclass mb-2"
                  >
                    Backend
                  </a>
                  <a
                    href="https://billhub.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btnclass mb-2"
                  >
                    Go Live
                  </a>
                </div>
              </div>
            </div>
          </div>

        
          <div className="col-md-6 col-sm-12 mt-5 mb-lg-5">
            <div className="card">
              <img src={Ecommerce} className="card-img-top" alt="AllBuy" />
              <div className="card-body">
                <h5 className="card-title text-center subTitleFonts">AllBuy</h5>
                <p className="card-text paragraphs">
                  AllBuy is an e-commerce platform focused on offering a diverse
                  range of clothing and accessories, providing users with a
                  smooth and intuitive shopping experience through easy
                  navigation and responsive design.
                </p>
                <div className="d-flex justify-content-evenly flex-wrap">
                  <a
                    href="https://github.com/manoj-hubgit/ECommerceFrontend"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btnclass mb-2"
                  >
                    Frontend
                  </a>
                  <a
                    href="https://github.com/manoj-hubgit/ECommerceBackend"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btnclass mb-2"
                  >
                    Backend
                  </a>
                  <a
                    href="https://allbuy.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btnclass mb-2"
                  >
                    Go Live
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
