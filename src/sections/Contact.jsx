import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SparkleIcon } from "lucide-react"
import { AnimatedHeader } from "../components/AnimatedHeader"
import { Marquee } from "../components/Marquee"
import { socialLinks } from "../config/constants"

const Contact = () => {
  const text = `Got a question, how or project Idea?
    WE’D love to hear from you and discus further!`
  const items = [
    "just imagin, I code",
    "just imagin, I code",
    "just imagin, I code",
    "just imagin, I code",
    "just imagin, I code",
  ]
  useGSAP(() => {
    gsap.from(".social-link", {
      delay: 0.5,
      duration: 1,
      ease: "back.out",
      opacity: 0,
      scrollTrigger: {
        trigger: ".social-link",
      },
      stagger: 0.3,
      y: 100,
    })
  }, [])
  return (
    <section className="flex min-h-screen flex-col justify-between bg-dark pt-8 text-light sm:pt-16" id="contact">
      <div>
        <AnimatedHeader
          lineColor={"bg-light"}
          subTitle={"You Dream It, I Code it"}
          text={text}
          title={"Contact"}
          withScrollTrigger={true}
        />
        <div className="flex flex-col gap-8 px-4 pt-8 font-display text-xl uppercase tracking-widest sm:px-8 md:text-2xl lg::gap-16 lg:text-3xl">
          <div className="social-link">
            <h2>E-mail</h2>
            <div className="h-px w-full bg-light/20" />
            <p>{socialLinks[0].href.slice(7)}</p>
          </div>

          <div className="social-link">
            <h2>Phone</h2>
            <div className="h-px w-full bg-light/20" />
            <p>+91 88105 76690</p>
          </div>

          <div className="social-link">
            <h2>Social Media</h2>
            <div className="h-px w-full bg-light/20" />
            <div className="flex flex-wrap gap-x-8 lg:gap-x-16">
              {socialLinks.map((social) => (
                <a
                  className="text-lg leading-loose tracking-widest opacity-80 transition-all duration-300 hover:opacity-100 md:text-xl lg:text-2xl"
                  href={social.href}
                  key={social.name}
                  rel="noopener noreferrer"
                >
                  {"{ "}
                  {social.name}
                  {" }"}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Marquee Icon={SparkleIcon} items={items} />
    </section>
  )
}

export default Contact
