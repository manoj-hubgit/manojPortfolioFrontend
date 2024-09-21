import React from "react";
import profileImg from "../assets/portfolioImage.jpg";
import Typewriter from "typewriter-effect";
import { BiLogoGithub, BiLogoGmail, BiLogoLinkedin } from "react-icons/bi";
import skillsPhoto from "../assets/skillsPhoto.jpg";
import skillsPhototwo from "../assets/skillsPhototwo.jpg";

import './Home.css';
import { RiReactjsLine } from "react-icons/ri";
import { FaBootstrap, FaCss3, FaGitAlt, FaGithub, FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress, SiNetlify, SiRender } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaFeatherPointed } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import { TbBrandVite } from "react-icons/tb";

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row mt-5">
        <div className="col-md-7">
          <h1 className="mx-5 mt-5 firstPar">Hello! I'm MANOJ A.</h1>
          <h2 className="mx-5 firstPar">I'm a passionate </h2>
          <h2 className="mx-5 firstPar">
            
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 50,
                strings: ["Full Stack Web Developer", "MERN Stack Developer"],
              }}
            />
          </h2>
          <p className="mx-5 paras">
            I specialize in the MERN stack. With a strong foundation in both
            frontend and backend development, I create dynamic, user-friendly,
            and efficient web applications.
          </p>
          <div className="text-center">
            <button className="btn btn-primary mx-2 w-25 mb-2">Resume</button>
          </div>
          <div className="d-flex justify-content-center mt-2">
            <div className="gmail logo">
              <BiLogoGmail/>
            </div>
            <div className="linkedin logo" >
              <BiLogoLinkedin />
            </div>
            <div className="github logo">
              <BiLogoGithub/>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <img
            src={profileImg}
            className="profileImage"
            alt="image"
          />
        </div>
      </div>

      <div className="row">
        <h1 className="text-center mt-5 subTitle">What Do I Know?</h1>
        <div className="col-6">
            <img className="h-100 w-100" src={skillsPhoto} alt="Skills I Know" />
        </div>
        <div className="col-6">
              <h2 className="subTitle">Full Stack Development</h2>
              <div className="row">
                
                <div className="col-3 text-center mt-2 mb-2">
                  <div className="skillsLogo html-icon"><FaHtml5/></div>
                  <div className="skillFont">Html</div>
                </div>
                <div className="col-3 text-center mt-2 mb-2">
                  <div className="skillsLogo css-icon"><FaCss3/></div>
                  <div className="skillFont">CSS</div>
                </div>
                <div className="col-3 text-center mt-2 mb-2">
                  <div className="skillsLogo js-icon"><IoLogoJavascript/></div>
                  <div className="skillFont">JavaScript</div>
                </div>
                <div className="col-3 text-center mt-2 mb-2">
                  <div className="skillsLogo bootstrap-icon"><FaBootstrap/></div>
                  <div className="skillFont">Bootstrap</div>
                </div>
                <div className="col-3 text-center mt-2 mb-2">
                  <div className="skillsLogo react-icon"><RiReactjsLine /></div>
                  <div className="skillFont">ReactJS</div>
                </div>
                <div className="col-3 text-center mt-2 mb-2">
                  <div className="skillsLogo express-icon"><SiExpress/></div>
                  <div className="skillFont">ExpressJs</div>
                </div>
                <div className="col-3 text-center mt-2 mb-2">
                  <div className="skillsLogo mongo-icon"><SiMongodb/></div>
                  <div className="skillFont">MongoDB</div>
                </div>
                <div className="col-3 text-center mt-2 mb-2">
                  <div className="skillsLogo mysql-icon"><GrMysql/></div>
                  <div className="skillFont">MySQL</div>
                </div>
              </div>
              <div className="mt-3 paras">
                <p><FaFeatherPointed/> Creating dynamic web applications using HTML, CSS, JavaScript, and Bootstrap.</p>
                <p><FaFeatherPointed/> Developing frontends with ReactJS and backends using Express.js.</p>
                <p><FaFeatherPointed/> Managing databases with MongoDB and MySQL.</p>
              </div>
        </div>
      </div>

      <div className="row">
              <div className="col-6">
              <h2 className="m-lg-4 mt-3 subTitle">Tools & Platforms</h2>
              <div className="row">
                
                <div className="col-4 text-center mt-2 mb-2">
                  <div className="skillsLogo git-icon"><FaGitAlt/></div>
                  <div className="skillFont">Git</div>
                </div>
                <div className="col-4 text-center mt-2 mb-2">
                  <div className="skillsLogo github-icon"><FaGithub/></div>
                  <div className="skillFont">GitHub</div>
                </div>
                <div className="col-4 text-center mt-2 mb-2">
                  <div className="skillsLogo vscode-icon"><VscVscode/></div>
                  <div className="skillFont">VScode</div>
                </div>
                <div className="col-4 text-center mt-2 mb-2">
                  <div className="skillsLogo render-icon"><SiRender/></div>
                  <div className="skillFont">Render</div>
                </div>
                <div className="col-4 text-center mt-2 mb-2">
                  <div className="skillsLogo netlify-icon"><SiNetlify /></div>
                  <div className="skillFont">Netlify</div>
                </div>
                <div className="col-4 text-center mt-2 mb-2">
                  <div className="skillsLogo vite-icon"><TbBrandVite/></div>
                  <div className="skillFont">Vite</div>
                </div>

              </div>
              <div className=" m-lg-4 mt-3 paras">
                <p><FaFeatherPointed/> Skilled in version control with Git and GitHub for smooth collaboration.</p>
                <p><FaFeatherPointed/> Experienced in fast development using VSCode and Vite.</p>
                <p><FaFeatherPointed/> Proficient in deploying applications on platforms like Render and Netlify.</p>
              </div>
              </div>
              <div className="col-6">
                <img className="h-100 w-100" src={skillsPhototwo} alt="" />
              </div>
      </div>
    </div>
  );
};

export default Home;
