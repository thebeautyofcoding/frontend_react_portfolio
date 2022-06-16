import React from "react"
import style from "./ProjectList.module.css"

import { useState } from "react"
import Button from "./Button/Button"
import { useEffect } from "react"
import { Card } from "../SkillItem/SkillItem"
import ProjectService from "../../services/ProjectService"
import SliderItem from "../SliderItem/SliderItem"
import { RootState } from "../../store"
import { useDispatch, useSelector } from "react-redux"
import { toggleModal, updateModalState } from "../../redux/modal/modal"

import { AnimatePresence } from "framer-motion"
import { Modal } from "../Modal/Modal"

const ProjectList: React.FC = () => {
  const dispatch = useDispatch()
  const [showModal, setShowModal] = useState(false)
  const isModalOpen = useSelector((state: RootState) => state.modal.isOpen)

  const [projects, setProjects] = useState<Card[]>()
  const onClickSliderItem = () => {}
  useEffect(() => {
    const getProjects = async () => {
      const res = await ProjectService.getAll()
      setProjects(res.data)
    }
    getProjects()
  }, [])
  const [slideIndex, setSlideIndex] = useState(1)

  const nextSlide = () => {
    if (slideIndex !== projects?.length) {
      setSlideIndex(slideIndex + 1)
    } else if (slideIndex === projects.length) {
      setSlideIndex(1)
    }
  }

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1)
    } else if (slideIndex === 1) {
      setSlideIndex(projects ? projects?.length : 0)
    }
  }
  const moveDot = (index: number) => {
    setSlideIndex(index)
  }
  return (
    <>
      <h2 id="projects">My First Projects</h2>
      <div className={style.container}>
        {projects?.map((project: Card, i) => {
          return (
            <div
              key={project.id}
              className={
                slideIndex === i + 1
                  ? [style.slide, style.activeAnim].join(" ")
                  : style.slide
              }>
              <SliderItem
                project={project}
                onClick={() => {
                  console.log("doh", slideIndex, i)

                  dispatch(updateModalState(project))
                  dispatch(toggleModal())
                }}
              />
            </div>
          )
        })}
        <div className={style.containerDots}>
          {Array.from({ length: projects ? projects?.length : 0 }).map(
            (item, index) => (
              <div
                key={index}
                onClick={() => moveDot(index + 1)}
                className={
                  slideIndex === index + 1
                    ? [style.dot, style.active].join(" ")
                    : style.dot
                }></div>
            )
          )}
        </div>
        <Button moveSlide={nextSlide} direction={"next"} />
        <Button moveSlide={prevSlide} direction={"previous"} />
      </div>
      <AnimatePresence exitBeforeEnter initial={false}>
        {isModalOpen && <Modal onClose={toggleModal} />}
      </AnimatePresence>
    </>
  )
}

export default ProjectList
