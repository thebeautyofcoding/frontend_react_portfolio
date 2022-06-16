import React from "react"
import { Contact } from "../../services/ContactService"
import Button from "../ProjectList/Button/Button"
import style from "./ContactItem.module.css"
export default function ContactItem({ contact }: { contact: Contact }) {
  return (
    <div className={style.container}>
      <h3>{contact.title}</h3>
      {!contact.description.includes("http") && (
        <div className={style.description}>{contact.description}</div>
      )}
      {contact.description.includes("http") && (
        <a href={contact.description}>
          <Button className={style.button}>Click here</Button>
        </a>
      )}
      <div>
        <img src={contact.logoLink} alt="" />
      </div>
    </div>
  )
}
