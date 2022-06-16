import React from "react"
import { useRef } from "react"
import { useEffect } from "react"
import { useState } from "react"
import MesagePredictionService, {
  MessageI,
} from "../../services/MessagePredictionService"
import style from "./ChatWindow.module.css"
import { CSSTransition, TransitionGroup } from "react-transition-group"
function ChatWindow() {
  const [loading, setLoading] = useState(false)
  const messageField = useRef<HTMLDivElement>(null)

  const [message, setMessage] = useState<MessageI>({
    message: "",
    sender: "",
  })
  const [response, setResponse] = useState<MessageI>({
    message: "",
    sender: "",
  })
  const [messages, setMessages] = useState<MessageI[]>([])
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage({
      message: (e.target as HTMLTextAreaElement).value,
      sender: "visitor",
    })
  }

  useEffect(() => {
    setTimeout(() => {
      setMessages((messages: MessageI[]): MessageI[] => [...messages, response])
      setLoading(false)
      if (messageField.current)
        messageField.current.scrollTop = messageField.current.scrollHeight
    }, 2000)
  }, [response])

  const sendMessage = async (message: MessageI) => {
    if (message.message === "") return
    setLoading(true)
    const res = await MesagePredictionService.sendMessage(message)

    setMessages((messages: MessageI[]): MessageI[] => [...messages, message])
    if (messageField.current)
      messageField.current.scrollTop = messageField.current.scrollHeight
    setResponse({ ...message, sender: "bot", message: res.data.message })

    setMessage({
      message: "",
      sender: "visitor",
    })
  }

  return (
    <div className={style.container}>
      <div className={style.box}>
        <div className={style.header}>
          <h3>Chat with my Bot</h3>
        </div>
        <div className={style.content} ref={messageField}>
          <TransitionGroup component={null}>
            {messages.map(
              (m, i) =>
                m.message !== "" && (
                  <CSSTransition
                    key={i}
                    timeout={500}
                    classNames={{
                      enterActive: style.messageEnterActive,
                      enter: style.messageEnterDone,
                    }}>
                    <div
                      className={
                        m.sender === "bot"
                          ? style.messageContainerBot
                          : style.messageContainerVisitor
                      }>
                      <div
                        className={
                          m.sender === "bot"
                            ? style.messageBot
                            : style.messageVisitor
                        }>
                        {m.message}
                      </div>
                    </div>
                  </CSSTransition>
                )
            )}
          </TransitionGroup>
        </div>
        <CSSTransition
          in={loading}
          timeout={200}
          classNames={{
            enter: style.loadingEnter,
            enterActive: style.loadingEnterActive,
          }}
          unmountOnExit>
          <div className={style.loadingContainer}>Loading...</div>
        </CSSTransition>
        {!loading && (
          <div className={style.footer}>
            <div className={style.textAreaAndButtonContainer}>
              <div className={style.textAreaContainer}>
                <textarea
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      sendMessage(message)
                    }
                  }}
                  className={style.textInput}
                  value={message.sender === "bot" ? "" : message.message}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div
                className={style.sendButtonContainer}
                onClick={() => sendMessage(message)}>
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  className={
                    !message.message
                      ? style.sendButtonDisabled
                      : style.sendButton
                  }>
                  <path d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 C22.8132856,11.0605983 22.3423792,10.4322088 21.714504,10.118014 L4.13399899,1.16346272 C3.34915502,0.9 2.40734225,1.00636533 1.77946707,1.4776575 C0.994623095,2.10604706 0.8376543,3.0486314 1.15159189,3.99121575 L3.03521743,10.4322088 C3.03521743,10.5893061 3.34915502,10.7464035 3.50612381,10.7464035 L16.6915026,11.5318905 C16.6915026,11.5318905 17.1624089,11.5318905 17.1624089,12.0031827 C17.1624089,12.4744748 16.6915026,12.4744748 16.6915026,12.4744748 Z"></path>
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ChatWindow
