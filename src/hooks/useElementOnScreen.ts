import React, { createRef } from "react"
import {
  useRef,
  useState,
  useEffect,
  RefObject,
  useMemo,
  LegacyRef,
} from "react"

interface OptionsI {
  threshold: number
}
export const useElementOnScreen = (
  ref: RefObject<Element>,
  options: OptionsI
) => {
  const [isVisible, setIsVisible] = useState(false)
  console.log(isVisible)
  // const optionsMemo = useMemo(() => {
  //   return options
  // }, [options])
  const containerRef = ref.current
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries
      console.log(entry)
      setIsVisible(entry.isIntersecting)
      console.log("ISSS")
    }, options)
    if (containerRef) observer.observe(containerRef)

    return () => {
      if (containerRef) observer.unobserve(containerRef)
    }
  })

  return isVisible
}
