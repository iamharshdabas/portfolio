import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useRef } from "react"
import { useMediaQuery } from "react-responsive"
import { AnimatedHeader } from "../components/AnimatedHeader"
import { servicesData } from "../config/constants"

gsap.registerPlugin(ScrollTrigger)

const text = `I build secure, high-performance full-stack apps
with smooth UX to drive growth 
not headaches.`

export const Services = () => {
  const servicesRefs = useRef([])
  const isSm = useMediaQuery({
    maxWidth: "48rem",
  })
  const isMd = useMediaQuery({
    maxWidth: "64rem",
  })

  useGSAP(() => {
    servicesRefs.current.forEach((el) => {
      if (!el) return
      gsap.from(el, {
        duration: 1,
        ease: "circ.out",
        scrollTrigger: {
          start: "top 60%",
          trigger: el,
        },
        y: "60%",
      })
    })
  }, [])

  return (
    <section
      className="flex min-h-screen flex-col gap-8 rounded-t-4xl bg-dark py-8 text-light sm:py-16 lg:gap-16"
      id="services"
    >
      <AnimatedHeader subTitle="behind the scene, beyond the screen" text={text} title="services" withScrollTrigger />
      <div className="grid grid-rows-4 gap-8 lg:gap-16">
        {servicesData.map((service, index) => (
          <div
            className="sticky border-light/60 border-t bg-dark px-4 py-4 sm:px-8"
            key={service.title}
            ref={(el) => {
              servicesRefs.current[index] = el
            }}
            style={{
              top: isSm
                ? `calc(8vh + ${index * 3.5}rem)`
                : isMd
                  ? `calc(8vh + ${index * 4.5}rem)`
                  : `calc(8vh + ${index * 6.25}rem)`,
            }}
          >
            <div className="flex flex-col gap-4">
              <h2 className="font-display text-2xl tracking-wider md:text-4xl lg:text-6xl">{service.title}</h2>
              <p className="tracking-wider opacity-80 md:text-lg lg:text-xl">{service.description}</p>
              {service.items.map((item, index) => (
                <div key={item.title}>
                  <h3 className="text-lg leading-relaxed tracking-wider md:text-xl lg:text-2xl">
                    <span className="mr-4 font-medium opacity-40">{`0${index + 1}`}</span>
                    {item.title}
                  </h3>
                  {index < service.items.length - 1 && <div className="h-[1px] rounded-full bg-light/20"></div>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
