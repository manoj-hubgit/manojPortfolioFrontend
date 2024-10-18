import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../Pages/font.css"
import "./header.css";

const Header = () => {
  const path= useLocation().pathname;
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link to="/" className={`navbar-brand ${path==="/" ? "active":""} name-logo mx-4 headings`}>&lt;-- Manoj --&gt;</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav navtext">
        <Link to="/" className={`nav-link ${path==="/" ? "active":""}`} >Home</Link>
        <Link to="/project" className={`nav-link ${path==="/project" ? "active":""}`} >Project</Link>
        <Link to="/education" className={`nav-link ${path==="/education" ? "active":""}`} >Education</Link>
       
        <Link to="/contact" className={`nav-link ${path==="/contact" ? "active":""}`} >Contact</Link>
      </div>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;