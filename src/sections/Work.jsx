/** biome-ignore-all lint/a11y/noStaticElementInteractions: false */

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ArrowUpRightIcon } from "lucide-react"
import { useRef, useState } from "react"
import { AnimatedHeader } from "../components/AnimatedHeader"
import { projectsData } from "../config/constants"

const Works = () => {
  const overlayRefs = useRef([])
  const previewRef = useRef(null)

  const [currentIndex, setCurrentIndex] = useState(null)
  const text = `Featured projects that have been meticulously
    crafted with passion to drive
    results and impact.`

  const moveX = useRef(null)
  const moveY = useRef(null)

  useGSAP(() => {
    moveX.current = gsap.quickTo(previewRef.current, "x", {
      duration: 1.5,
      ease: "power3.out",
    })
    moveY.current = gsap.quickTo(previewRef.current, "y", {
      duration: 2,
      ease: "power3.out",
    })

    gsap.from("#project", {
      duration: 1,
      ease: "back.out",
      opacity: 0,
      scrollTrigger: {
        end: "top 80%",
        start: "top 100%",
        trigger: "#project",
      },
      stagger: 0.25,
      y: 100,
    })
  }, [])

  const handleMouseEnter = (index) => {
    if (window.innerWidth < 768) return
    setCurrentIndex(index)

    const el = overlayRefs.current[index]
    if (!el) return

    gsap.killTweensOf(el)
    gsap.to(el, {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      duration: 0.15,
      ease: "power2.out",
    })

    gsap.to(previewRef.current, {
      duration: 0.5,
      ease: "power2.out",
      opacity: 1,
      scale: 1,
    })
  }

  const handleMouseLeave = (index) => {
    if (window.innerWidth < 768) return
    setCurrentIndex(null)

    const el = overlayRefs.current[index]
    if (!el) return

    gsap.killTweensOf(el)
    gsap.to(el, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
      duration: 0.2,
      ease: "power2.in",
    })

    gsap.to(previewRef.current, {
      duration: 0.5,
      ease: "power2.out",
      opacity: 0,
      scale: 0.95,
    })
  }

  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return
    moveX.current(e.clientX)
    moveY.current(e.clientY)
  }

  return (
    <section className="flex min-h-screen flex-col gap-8 py-8 sm:py-16 lg:gap-16" id="work">
      <AnimatedHeader
        lineColor="bg-dark"
        subTitle={"Logic meets Aesthetics, Seamlessly"}
        text={text}
        title={"Works"}
        withScrollTrigger={true}
      />
      <div className="relative flex flex-col font-light" onMouseMove={handleMouseMove}>
        {projectsData.map((project, index) => (
          <div
            className="group relative flex flex-col gap-1 py-6 md:gap-0"
            id="project"
            key={project.id}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            {/* overlay */}
            <div
              className="-z-10 clip-path absolute inset-0 hidden bg-dark duration-300 md:block"
              ref={(el) => {
                overlayRefs.current[index] = el
              }}
              style={{
                clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
              }}
            />

            {/* title */}
            <a
              className="flex items-center justify-between px-4 text-dark transition-all duration-700 md:group-hover:px-8 md:group-hover:text-light"
              href={project.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              <h2 className="text-2xl leading-none lg:text-3xl">{project.name}</h2>
              <ArrowUpRightIcon />
            </a>
            {/* divider */}
            <div className="h-px w-full bg-dark" />
            {/* framework */}
            <div className="transtion-all flex flex-wrap gap-x-4 px-4 text-xs uppercase leading-loose duration-500 md:text-sm md:group-hover:px-8">
              {project.frameworks.map((framework) => (
                <p className="text-dark transition-colors duration-500 md:group-hover:text-light" key={framework.id}>
                  {framework.name}
                </p>
              ))}
            </div>
            {/* mobile preview image */}
            <div className="px-4 md:hidden">
              <div className="relative flex items-center justify-center">
                <img
                  alt={`${project.name} background`}
                  className="h-full w-full rounded-xl object-cover brightness-40"
                  src={project.bgImage}
                />
                <img
                  alt={`${project.name} preview`}
                  className="absolute rounded-xl bg-center px-4"
                  src={project.image}
                />
              </div>
              <Desc className="pt-4" text={project.description} />
            </div>
          </div>
        ))}
        {/* desktop Flaoting preview image */}
        <div
          className="-top-1/3 pointer-events-none fixed left-0 z-50 hidden max-w-prose overflow-hidden rounded-2xl bg-dark text-light opacity-0 md:block"
          ref={previewRef}
        >
          {currentIndex !== null && (
            <>
              <img
                alt={`${projectsData[currentIndex].name} preview`}
                className="h-full w-full object-cover"
                src={projectsData[currentIndex].image}
              />
              <Desc className="p-4" text={projectsData[currentIndex].description} />
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default Works

const Desc = ({ text, className }) => <p className={`text-base leading-relaxed md:text-lg ${className}`}>{text}</p>
