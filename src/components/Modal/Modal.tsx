import React from "react"

import style from "./Modal.module.css"
import closeIcon from "./x.svg"
import { useDispatch, useSelector } from "react-redux"
import { toggleModal } from "../../redux/modal/modal"
import { AppDispatch, RootState } from "../../store"
import { skillSlice } from "./../../redux/skills/skillSlice"
import { motion, AnimatePresence } from "framer-motion"
import Backdrop from "./../Backdrop/Backdrop"
import { useState } from "react"

interface ModalProps {
  onClose: () => void
}

export const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  const dispatch = useDispatch()
  const content = useSelector((state: RootState) => state.modal)

  const toggle = (dispatch: AppDispatch) => {
    dispatch(toggleModal())
  }

  const dropIn = {
    hidden: {
      y: "100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 1,
        type: "spring",
        damping: 25,
        stiffness: 400,
      },
    },
    exit: {
      y: "-100vh",
      opacity: 0,
    },
  }
  return (
    <Backdrop onClick={() => toggle(dispatch)}>
      <motion.div
        key="modal"
        onClick={(e) => e.stopPropagation()}
        className={style.box}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit">
        <div className={style.closeBtn} onClick={() => toggle(dispatch)}>
          <img src={closeIcon} alt={"close modal"} />
        </div>
        <div className={style.contentContainer}>
          <h3 className={style.title}>{content.title}</h3>
          <div className={style.content}>{content.detailedDescription}</div>
        </div>
      </motion.div>
    </Backdrop>
  )
}
