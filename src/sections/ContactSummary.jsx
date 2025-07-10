import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { LightbulbIcon, SparkleIcon } from "lucide-react"
import { useRef } from "react"
import { Marquee } from "../components/Marquee"

const ContactSummary = () => {
  const containerRef = useRef(null)
  const items = [
    "Innovation",
    "Precision",
    "Trust",
    "Collaboration",
    "Excellence",
  ]
  const items2 = [
    "contact us",
    "contact us",
    "contact us",
    "contact us",
    "contact us",
  ]

  useGSAP(() => {
    gsap.to(containerRef.current, {
      scrollTrigger: {
        end: "+=800 center",
        markers: false,
        pin: true,
        pinSpacing: true,
        scrub: 0.5,
        start: "center center",
        trigger: containerRef.current,
      },
    })
  }, [])
  return (
    <section className="flex min-h-screen flex-col items-center justify-between gap-8" ref={containerRef}>
      <Marquee Icon={SparkleIcon} items={items} />
      <div className="text-center font-light text-3xl md:text-4xl lg:text-5xl">
        <p>
          “Let’s build a <br />
          <span className="font-bold">memorable</span> & <span className="font-normal italic">inspiring</span> <br />
          web application <span className="font-bold font-display">together</span>“
        </p>
      </div>
      <Marquee className="border-y-2 bg-transparent text-black" Icon={LightbulbIcon} items={items2} reverse={true} />
    </section>
  )
}

export default ContactSummary
