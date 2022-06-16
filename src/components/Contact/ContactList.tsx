import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import ContactService, { Contact } from "../../services/ContactService"
import style from "./ContactList.module.css"
import ContactItem from "./ContactItem"
export default function ContactList() {
  const getAllContacts = async () => {
    const res = await ContactService.getAll()
    setContacts(res.data)
  }

  const [contacts, setContacts] = useState<Contact[]>()

  useEffect(() => {
    getAllContacts()
  }, [])

  return (
    <div id="contact" className={style.container}>
      <h2>Contact</h2>
      <div className={style.itemContainer}>
        {contacts?.map((contact) => (
          <ContactItem contact={contact} />
        ))}
      </div>
    </div>
  )
}
