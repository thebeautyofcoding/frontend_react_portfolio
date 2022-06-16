import React from "react"
import "./Footer.css"
function Footer() {
  return (
    <section id="footer">
      <div className="footer container">
        <div className="brand">
          <h1>
            He<span className="red">i</span>ner G<span className="red">i</span>
            ehl
          </h1>
        </div>
        <h2>Your Complete Web Solution</h2>
        <div className="social-icon">
          <div className="social-item">
            <a href="#">
              <img src={require("./../../assets/images/Octocat.png")} />
            </a>
          </div>
        </div>
        <p>&copy; 2022 heiner.tech. All rights reserved</p>
      </div>
    </section>
  )
}

export default Footer
