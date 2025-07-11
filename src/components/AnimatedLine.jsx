import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

export const AnimatedLine = ({ text, className }) => {
  const containerRef = useRef(null)
  const lineRefs = useRef([])
  const lines = text.split("\n").filter((line) => line.trim() !== "")
  useGSAP(() => {
    if (lineRefs.current.length > 0) {
      gsap.from(lineRefs.current, {
        duration: 1,
        ease: "back.out",
        opacity: 0,
        scrollTrigger: {
          start: "top 90%",
          end: "top 60%",
          trigger: containerRef.current,
        },
        stagger: 0.5,
        y: 100,
      })
    }
  })

  return (
    <div className={className} ref={containerRef}>
      {lines.map((line, index) => (
        <span
          className="block text-pretty leading-relaxed tracking-wide"
          key={line}
          ref={(el) => {
            lineRefs.current[index] = el
          }}
        >
          {line}
        </span>
      ))}
    </div>
  )
}
