import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useRef } from "react"
import { AnimatedLine } from "./AnimatedLine"

gsap.registerPlugin(ScrollTrigger)

export const AnimatedHeader = ({ subTitle, title, text, lineColor = "bg-light", withScrollTrigger = false }) => {
  const contextRef = useRef(null)
  const headerRef = useRef(null)
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: withScrollTrigger
        ? {
            end: "top 80%",
            start: "top 100%",
            trigger: contextRef.current,
          }
        : undefined,
    })
    tl.from(contextRef.current, {
      duration: 1,
      ease: "circ.out",
      y: "10vh",
    })
    tl.from(
      headerRef.current,
      {
        duration: 1,
        ease: "circ.out",
        opacity: 0,
        y: "200",
      },
      "<+0.2",
    )
  }, [])

  return (
    <div className="uppercase" ref={contextRef}>
      <div
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        }}
      >
        <div className="relative" ref={headerRef}>
          <p className="px-4 pb-4 font-light text-sm tracking-widest sm:px-8">{subTitle}</p>
          <h1 className="px-4 font-display text-6xl sm:px-8 sm:text-7xl md:text-8xl">{title}</h1>
          <div className={`absolute right-0 bottom-0 left-0 h-px ${lineColor}`} />
        </div>
      </div>
      <AnimatedLine className="flex flex-col items-end px-4 pt-8 text-end text-sm sm:px-8 md:text-base" text={text} />
    </div>
  )
}
