import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { ImagePill } from "../components/ImagePill"

gsap.registerPlugin(ScrollTrigger)

export const ServicesSummary = () => {
  useGSAP(() => {
    gsap.to("#title-service-1", {
      scrollTrigger: {
        scrub: true,
        target: "#title-service-1",
      },
      xPercent: -60,
    })
    gsap.to("#title-service-2", {
      scrollTrigger: {
        scrub: true,
        target: "#title-service-2",
      },
      xPercent: 100,
    })
    gsap.to("#title-service-3", {
      scrollTrigger: {
        scrub: true,
        target: "#title-service-3",
      },
      xPercent: -100,
    })
    gsap.to("#title-service-4", {
      scrollTrigger: {
        scrub: true,
        target: "#title-service-4",
      },
      xPercent: 60,
    })
  })

  return (
    <section className="overflow-hidden px-4 py-24 text-center font-light text-2xl leading-snug sm:px-8 md:text-4xl lg:py-36 lg:text-6xl">
      <div className="translate-x-1/5" id="title-service-1">
        <p>Architucture</p>
      </div>
      <div className="-translate-x-2/5 flex items-center justify-center" id="title-service-2">
        <p className="font-bold">Development</p>
        <ImagePill className="!m-2 max-w-24 rounded-xl p-0" image="https://picsum.photos/600/400?random=1" />
        <p>Deployment</p>
      </div>
      <div className="flex translate-x-2/5 items-center justify-center" id="title-service-3">
        <p>APIs</p>
        <ImagePill className="!m-2 max-w-24 rounded-xl p-0" image="https://picsum.photos/600/400?random=2" />
        <p className="font-normal italic">Frontends</p>
        <ImagePill className="!m-2 max-w-24 rounded-xl p-0" image="https://picsum.photos/600/400?random=3" />
        <p>Scalability</p>
      </div>
      <div className="-translate-x-1/5" id="title-service-4">
        <p>Databases</p>
      </div>
    </section>
  )
}
