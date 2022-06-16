import React from "react"
import { useState } from "react"
import SendEmailService from "../../services/SendEmailService"
import style from "./ContactMe.module.css"
import Backdrop from "./../Backdrop/Backdrop"
import Button from "./../ProjectList/Button/Button"
interface PropsI {
  toggleContactMe?: () => void
}
const ContactMe: React.FC<PropsI> = (props: PropsI) => {
  const [email, setEmail] = useState({
    subject: "",
    emailAddress: "",
    message: "",
  })
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    setEmailSentSuccess(false)
    const value = e.target.value
    setEmail({
      ...email,
      [e.target.name]: value,
    })
  }
  interface ValidationErrorI {
    emailAddress: string[]
    subject: string[]
    message: string[]
  }
  const [validationError, setValidationError] = useState<ValidationErrorI>()
  const [emailSentSuccess, setEmailSentSuccess] = useState<boolean>(false)
  const { subject, emailAddress, message } = email
  const onClick = async () => {
    const res = await SendEmailService.sendEmail(email).catch((err) => {
      setValidationError({ ...err.response.data })
    })
    if (res?.status === 200) {
      setValidationError({ emailAddress: [], subject: [], message: [] })
      setEmailSentSuccess(true)
      setEmail({
        emailAddress: "",
        message: "",
        subject: "",
      })
    }
  }
  return (
    <div className={style.container}>
      <div className={style.h3Container}>
        {" "}
        <h3>Contact Me</h3>
      </div>
      <div className={style.subjectContainer}>
        <label>Subject</label>
        <input
          type="text"
          value={subject}
          name="subject"
          onChange={handleChange}
        />
        {validationError?.subject && (
          <div className={style.validationError}>
            {validationError?.subject[0]}
          </div>
        )}
      </div>
      <div className={style.emailContainer}>
        <label>Email</label>
        <input
          type="email"
          value={emailAddress}
          name="emailAddress"
          onChange={handleChange}
        />
        {validationError?.emailAddress && (
          <div className={style.validationError}>
            {validationError?.emailAddress[0]}
          </div>
        )}
      </div>
      <div className={style.messageContainer}>
        <label>Message</label>
        <textarea
          value={message}
          name="message"
          onChange={(e) => handleChange(e)}
        />
        {validationError?.message && (
          <div className={style.validationError}>
            {validationError?.message[0]}
          </div>
        )}
        {emailSentSuccess && (
          <div className={style.successMessage}>
            Thanks for your message. I will be messaging you soon!
          </div>
        )}
      </div>
      <div className={style.sendContainer}>
        <Button
          disabled={
            email.emailAddress === "" ||
            email.message === "" ||
            email.subject === ""
              ? true
              : false
          }
          onClick={onClick}
          className={style.send}>
          Send
        </Button>
      </div>
    </div>
  )
}

export default ContactMe
