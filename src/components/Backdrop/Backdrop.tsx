import React, { ReactElement } from "react"
import { AnimatePresence, motion } from "framer-motion"
import style from "./Backdrop.module.css"
const Backdrop: React.FC<{
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}> = ({ children, onClick }): ReactElement => {
  return (
    <motion.div
      className={style.backdrop}
      onClick={(e) => {
        if (e.currentTarget !== e.target) return

        onClick && onClick(e)
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      {children}
    </motion.div>
  )
}

export default Backdrop
