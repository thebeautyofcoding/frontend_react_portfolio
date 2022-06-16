import React, { ReactElement, FunctionComponent, useState } from "react"
import { ReactNode } from "react"
import { useDispatch } from "react-redux"
import { toggleModal, updateModalState } from "../../redux/modal/modal"

import style from "./SkillItem.module.css"

export interface Card {
  id: string
  detailedDescription: string
  shortDescription: string
  title: string
}
const SkillItem: FunctionComponent<Card> = (skill): ReactElement => {
  const onClick = () => {
    dispatch(toggleModal())
    dispatch(updateModalState(skill))
  }
  const dispatch = useDispatch()
  return (
    <div className={style.box}>
      <div className={style.icon}>{skill.id}</div>
      <div className={style.content}>
        <h3>{skill.title}</h3>
        <p>{skill.shortDescription}</p>
        <button onClick={onClick}>Read More</button>
      </div>
    </div>
  )
}

export default SkillItem
