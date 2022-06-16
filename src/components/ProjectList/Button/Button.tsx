import leftArrow from "./../icons/left-arrow.svg"
import rightArrow from "./../icons/right-arrow.svg"
import style from "./Button.module.css"
interface ButtonProps {
  direction?: "next" | "previous" | null
  moveSlide?: () => void
  onClick?: () => void
  children?: string
  disabled?: boolean
  className?: string
}
export default function Button({
  direction,
  moveSlide,
  onClick,
  children,
  disabled,
  className,
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={moveSlide ? moveSlide : onClick}
      className={[
        direction
          ? direction === "next"
            ? [style.btnSlide, style.next].join(" ")
            : [style.btnSlide, style.prev].join(" ")
          : style.standardButton,
        className,
      ].join(" ")}>
      {direction && (
        <img alt="" src={direction === "next" ? rightArrow : leftArrow} />
      )}
      {children && children}
    </button>
  )
}
