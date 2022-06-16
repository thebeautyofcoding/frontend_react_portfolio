import React from "react"
import style from "./AppContainer.module.css"
const AppContainer: React.FC = ({ children }) => {
  return <div className={style.container}>{children}</div>
}

export default AppContainer
