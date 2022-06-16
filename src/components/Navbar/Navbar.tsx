import React from "react"
import "./Navbar.css"
import { HashLink } from "react-router-hash-link"
function Navbar() {
  return (
    <section id="header">
      <div className="header">
        <div className="nav-bar">
          <div className="brand">
            <HashLink smooth to="#hero">
              <h1>
                <div></div>
                He<span className="red">i</span>ner G
                <span className="red">i</span>ehl
              </h1>
            </HashLink>
          </div>
          <div className="nav-list">
            <div className="hamburger">
              <div className="bar"></div>
            </div>
            <ul className="nav-ul">
              <li>
                <HashLink smooth to="#hero" data-after="Home">
                  Home
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="#skills" data-after="Skills">
                  Skills
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="#projects" data-after="Projects">
                  Projects
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="#about" data-after="About">
                  About
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="#contact" data-after="Contact">
                  Contact
                </HashLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Navbar
