import React, { ReactElement, FunctionComponent } from "react"
import style from "./SliderItem.module.css"
import { Card } from "./../SkillItem/SkillItem"
import { useDispatch } from "react-redux"
import { toggleModal, updateModalState } from "../../redux/modal/modal"

interface SliderItemProps {
  project: {
    id: string
    detailedDescription: string
    shortDescription: string
    title: string
  }
  className?: string
  onClick: () => void
}

const SliderItem: React.FC<SliderItemProps> = (project) => {
  return (
    <div
      id={"projects"}
      className={[style.container, project.className].join(" ")}
      onClick={() => project.onClick()}>
      <div className={style.content}>
        <div className={style.title}>
          <h2>{project.project.title}</h2>
        </div>
        <div className={style.shortDescription}>
          <p>{project.project.shortDescription}</p>
        </div>
      </div>
    </div>
  )
}

export default SliderItem
