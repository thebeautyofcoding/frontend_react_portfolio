import React from "react"
import style from "./AboutMe.module.css"
import { AnimatePresence } from "framer-motion"
import Me from "./../../assets/images/profile.jpg"
function AboutMe() {
  return (
    <>
      <h2 id="about">About Me</h2>
      <div className={style.container}>
        <div className={style.content}>
          <img src={Me} alt="" />
          <div>
            <h3>Highly-passionated Fullstack-Web-Developer</h3>
            <p>
              As someone who loves understanding complex concepts and has a
              scientific background(B.Sc Chemical Biology, TU Dortmund), it was
              just a matter of time to find out how much I love programming. The
              process of using creativity and logical thinking to build complex,
              functional and beautiful web-applications is what I enjoy!
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutMe
