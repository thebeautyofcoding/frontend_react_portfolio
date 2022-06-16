import React from "react"
import style from "./ContactMeButton.module.css"
interface PropsI {
  onClick: () => void
}
const ContactMeButton: React.FC<PropsI> = (props: PropsI) => {
  return (
    <div className={style.container}>
      <button onClick={props.onClick}>Button</button>
    </div>
  )
}

export default ContactMeButton
