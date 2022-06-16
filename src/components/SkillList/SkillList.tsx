import React from "react"
import { useEffect } from "react"
import { FunctionComponent, ReactElement, useState } from "react"
import ServiceService from "../../services/ServiceService"
import { Modal } from "../Modal/Modal"
import s from "./SkillList.module.css"
import SkillItem, { Card } from "../SkillItem/SkillItem"
import style from "./../SkillItem/SkillItem.module.css"
import { useDispatch, useSelector } from "react-redux"
import { skillSlice } from "./../../redux/skills/skillSlice"
import { RootState } from "../../store"
import { AnimatePresence } from "framer-motion"
const SkillList: FunctionComponent = (): ReactElement => {
  const isModalOpen = useSelector((state: RootState) => state.modal.isOpen)

  const [skills, setSkills] = useState<Array<Card>>([])
  // const [isModalOpen, setModalOpen] = useState(false)
  const dispatch = useDispatch()
  const toggleModal = () => dispatch(toggleModal)
  async function getSkills() {
    const result = await ServiceService.getAll()
    setSkills(result.data)
  }

  useEffect(() => {
    getSkills()
  }, [skills.length])
  return (
    <div id="skills">
      <div className={s.h2Container}>
        <h2>What do I offer?</h2>
      </div>
      <div className={style.container}>
        {skills.map((skill) => (
          <SkillItem
            key={skill.id}
            id={skill.id}
            shortDescription={skill.shortDescription}
            detailedDescription={skill.detailedDescription}
            title={skill.title}
          />
        ))}
      </div>
      <AnimatePresence exitBeforeEnter initial={false}>
        {isModalOpen && <Modal onClose={toggleModal} />}
      </AnimatePresence>
    </div>
  )
}

export default SkillList
