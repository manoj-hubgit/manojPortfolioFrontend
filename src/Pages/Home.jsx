import React, { useEffect, useState } from "react";
import profileImg from "../assets/portfolioImage.jpg";
import Typewriter from "typewriter-effect";
import { BiLogoGithub, BiLogoGmail, BiLogoLinkedin } from "react-icons/bi";
import skillsPhoto from "../assets/skillsPhoto.jpg";
import skillsPhototwo from "../assets/skillsPhototwo.jpg";

import "./Home.css";
import { RiReactjsLine } from "react-icons/ri";
import {
  FaBootstrap,
  FaCss3,
  FaGitAlt,
  FaGithub,
  FaHtml5,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiExpress,
  SiNetlify,
  SiPostman,
  SiRedux,
  SiRender,
} from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaFeatherPointed } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import { TbBrandVite } from "react-icons/tb";
import { DiNodejs } from "react-icons/di";

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row mt-5 flex-column-reverse flex-md-row">
        <div className="col-md-7 col-sm-12">
          <h1 className="mx-3 mt-5 firstPar">Hello! I'm MANOJ A.</h1>
          <h2 className="mx-3 firstPar">I'm a passionate </h2>
          <h2 className="mx-3 firstPar">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 50,
                strings: ["Full Stack Web Developer", "MERN Stack Developer"],
              }}
            />
          </h2>
          <p className="mx-3 paras">
            I specialize in the MERN stack. With a strong foundation in both
            frontend and backend development, I create dynamic, user-friendly,
            and efficient web applications.
          </p>
          <div className="text-center">
            <a
              className="resume-btn"
              href="https://drive.google.com/file/d/1Y0i-towT1qhIA6hPwKM7hcdg0lQkFRwF/view?usp=sharing"
              target="_blank"
            >
              <button className="res-btn btn mx-2 w-25 mb-2">Resume</button>
            </a>
          </div>
          <div className="d-flex justify-content-center mt-2">
            <a
              href="mailto:manojannadurai2265@gmail.com"
              className="gmail logo"
            >
              <BiLogoGmail />
            </a>
            <a
              href="https://www.linkedin.com/in/manoj312/"
              target="_blank"
              className="linkedin logo"
            >
              <BiLogoLinkedin />
            </a>
            <a
              href="https://github.com/manoj-hubgit"
              target="_blank"
              className="github logo"
            >
              <BiLogoGithub />
            </a>
          </div>
        </div>
        <div className="col-md-5 col-sm-11 mt-sm-3  text-center">
          <img src={profileImg} className="profileImage" alt="image" />
        </div>
      </div>

      <div className="row">
        <h1 className="text-center mt-5 titleFonts">What Do I Know?</h1>
        <div className="block col-md-6 col-sm-11">
          <img className="h-100 w-100" src={skillsPhoto} alt="Skills I Know" />
        </div>
        <div className="col-md-6 col-sm-11 block">
          <h2 className="subTitleFonts">Full Stack Development</h2>

          <div className="row justify-content-center">
            <div className="col-3 text-center mt-2 mb-2">
              <div className="skillsLogo html-icon">
                <FaHtml5 />
              </div>
              <div className="paragraphs">Html</div>
            </div>
            <div className="col-3 text-center mt-2 mb-2">
              <div className="skillsLogo css-icon">
                <FaCss3 />
              </div>
              <div className="paragraphs">CSS</div>
            </div>
            <div className="col-3 text-center mt-2 mb-2">
              <div className="skillsLogo js-icon">
                <IoLogoJavascript />
              </div>
              <div className="paragraphs">JavaScript</div>
            </div>
            <div className="col-3 text-center mt-2 mb-2">
              <div className="skillsLogo bootstrap-icon">
                <FaBootstrap />
              </div>
              <div className="paragraphs">Bootstrap</div>
            </div>
            <div className="col-3 text-center mt-2 mb-2">
              <div className="skillsLogo react-icon">
                <RiReactjsLine />
              </div>
              <div className="paragraphs">ReactJS</div>
            </div>
            <div className="col-3 text-center mt-2 mb-2">
              <div className="skillsLogo express-icon">
                <SiExpress />
              </div>
              <div className="paragraphs">ExpressJs</div>
            </div>
            <div className="col-3 text-center mt-2 mb-2">
              <div className="skillsLogo mongo-icon">
                <SiMongodb />
              </div>
              <div className="paragraphs">MongoDB</div>
            </div>
            <div className="col-3 text-center mt-2 mb-2">
              <div className="skillsLogo mysql-icon">
                <GrMysql />
              </div>
              <div className="paragraphs">MySQL</div>
            </div>
            <div className="col-3 text-center mt-2 mb-2">
              <div className="skillsLogo nodejs-icon">
                <DiNodejs />
              </div>
              <div className="paragraphs">NodeJS</div>
            </div>
            <div className="col-3 text-center mt-2 mb-2">
              <div className="skillsLogo redux-icon">
                <SiRedux />
              </div>
              <div className="paragraphs">Redux</div>
            </div>
          </div>

          <div className="mt-3 paragraphs">
            <p>
              <FaFeatherPointed /> Creating dynamic web applications using HTML,
              CSS, JavaScript, and Bootstrap.
            </p>
            <p>
              <FaFeatherPointed /> Developing frontends with ReactJS and
              backends using Express.js.
            </p>
            <p>
              <FaFeatherPointed /> Managing databases with MongoDB and MySQL.
            </p>
          </div>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6 col-sm-11 block">
          <h2 className="m-lg-4 mt-3 subTitleFonts">Tools & Platforms</h2>

          <div className="row">
            <div className="col-3 text-center mt-2 mb-2">
              <div className="skillsLogo git-icon">
                <FaGitAlt />
              </div>
              <div className="paragraphs">Git</div>
            </div>
            <div className="col-3 text-center mt-2 mb-2">
              <div className="skillsLogo github-icon">
                <FaGithub />
              </div>
              <div className="paragraphs">GitHub</div>
            </div>
            <div className="col-3 text-center mt-2 mb-2">
              <div className="skillsLogo vscode-icon">
                <VscVscode />
              </div>
              <div className="paragraphs">VScode</div>
            </div>
            <div className="col-3 text-center mt-2 mb-2">
              <div className="skillsLogo render-icon">
                <SiRender />
              </div>
              <div className="paragraphs">Render</div>
            </div>
            <div className="col-3 text-center mt-2 mb-2">
              <div className="skillsLogo netlify-icon">
                <SiNetlify />
              </div>
              <div className="paragraphs">Netlify</div>
            </div>
            <div className="col-3 text-center mt-2 mb-2">
              <div className="skillsLogo vite-icon">
                <TbBrandVite />
              </div>
              <div className="paragraphs">Vite</div>
            </div>
            <div className="col-3 text-center mt-2 mb-2">
              <div className="skillsLogo mongo-icon">
                <SiMongodb />
              </div>
              <div className="paragraphs">Compass</div>
            </div>
            <div className="col-3 text-center mt-2 mb-2">
              <div className="skillsLogo postman-icon">
                <SiPostman />
              </div>
              <div className="paragraphs">Postman</div>
            </div>
          </div>

          <div className="m-lg-4 mt-3 paragraphs">
            <p>
              <FaFeatherPointed /> Skilled in version control with Git and
              GitHub for smooth collaboration.
            </p>
            <p>
              <FaFeatherPointed /> Experienced in fast development using VSCode
              and Vite.
            </p>
            <p>
              <FaFeatherPointed /> Proficient in deploying applications on
              platforms like Netlify and Render.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-sm-11 block">
          <img className="h-100 w-100" src={skillsPhototwo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
