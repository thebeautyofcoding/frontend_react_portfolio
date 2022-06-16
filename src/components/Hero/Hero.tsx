import React, { FunctionComponent, ReactElement } from "react"
import Button from "../ProjectList/Button/Button"

import style from "./Hero.module.css"

interface HeroProps {
  onClick: () => void
}

const Hero: FunctionComponent<HeroProps> = ({ onClick }): ReactElement => {
  return (
    <section id={style.hero}>
      <div className={style.hero + " " + style.container}>
        <div className={style.sliderAnimation}>
          <h1>
            Hello, ...<span></span>
          </h1>

          <h1>
            my name is...<span></span>
          </h1>

          <h1>
            <span>H</span>
            <span>E</span>
            <span>I</span>
            <span>N</span>
            <span>E</span>
            <span>R</span>
          </h1>
        </div>
        <div className={style.buttonContainer}>
          <Button className={style.button} onClick={onClick}>
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero
