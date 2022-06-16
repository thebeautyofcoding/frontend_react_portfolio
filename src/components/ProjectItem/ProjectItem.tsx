import React from "react"
import style from "./ProjectItem.module.css"
interface PropsI {
  imgSrc: string
}
const ProjectItem: React.FC<PropsI> = ({ imgSrc }: PropsI) => {
  return <div className={style.imageContainer}></div>
}

export default ProjectItem
