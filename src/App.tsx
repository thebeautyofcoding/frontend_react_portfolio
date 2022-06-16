import React, {
  lazy,
  RefObject,
  Suspense,
  useState,
  useEffect,
  ReactElement,
  useRef,
  FunctionComponent,
} from "react"

import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"

import "./App.css"

// const SkillList = lazy(() => import("./components/SkillList/SkillList"))
import SkillList from "./components/SkillList/SkillList"
import ChatWindow from "./components/ChatWindow/ChatWindow"
import AppContainer from "./components/AppContainer/AppContainer"
import ChatButton from "./components/ChatButton/ChatButton"
import { toggleModal } from "./redux/modal/modal"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import CompletedJobs from "./components/CompletedJobs/CompletedJobs"
import ContactMeButton from "./components/ContactMe/ContactMeButton"
import ContactMe from "./components/ContactMe/ContactMe"
import Backdrop from "./components/Backdrop/Backdrop"
import Footer from "./components/Footer/Footer"
import ProjectList from "./components/ProjectList/ProjectList"
import Button from "./components/ProjectList/Button/Button"
import AboutMe from "./components/AboutMe/AboutMe"
import styled from "styled-components"
import ContactList from "./components/Contact/ContactList"

const App: FunctionComponent = (): ReactElement => {
  const [toggle, setToggle] = useState(false)
  const [toggleForm, setToggleForm] = useState(false)
  const toggleWindow = () => {
    setToggle(!toggle)
  }

  const toggleContactMe = () => {
    setToggleForm(!toggleForm)
  }
  return (
    <AppContainer>
      <Navbar />
      <Hero onClick={toggleContactMe} />

      <CSSTransition
        in={toggleForm}
        timeout={100}
        classNames="backdrop"
        unmountOnExit>
        <Backdrop onClick={toggleContactMe}>
          <CSSTransition
            in={toggleForm}
            timeout={100}
            classNames="email"
            unmountOnExit>
            <ContactMe />
          </CSSTransition>
        </Backdrop>
      </CSSTransition>

      <CSSTransition in={toggle} timeout={200} classNames="chat" unmountOnExit>
        <ChatWindow />
      </CSSTransition>
      <Suspense fallback={<div>Loading...</div>}>
        <div>
          <SkillList />
        </div>
      </Suspense>
      <ProjectList />
      <div className="aboutMe">
        <AboutMe />
      </div>
      <div className="contact">
        <ContactList />
      </div>
      <ChatButton onClick={toggleWindow} />
      <div className="footerContainer">
        <Footer />
      </div>
    </AppContainer>
  )
}

export default App
