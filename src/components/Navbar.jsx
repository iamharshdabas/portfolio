import { useGSAP } from "@gsap/react"
import { useLocation } from "react-router-dom"
import gsap from "gsap"
import { useEffect, useRef, useState } from "react"
import { navbarLinks, socialLinks } from "../config/constants"
import { FlowingMenu } from "./FlowingMenu"

export const Navbar = () => {
  const navRef = useRef(null)
  const linksRef = useRef([])
  const contactRef = useRef(null)
  const topLineRef = useRef(null)
  const bottomLineRef = useRef(null)
  const tl = useRef(null)
  const iconTl = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const [showBurger, setShowBurger] = useState(true)
  const location = useLocation()
  useGSAP(() => {
    gsap.set(navRef.current, {
      xPercent: 100,
    })
    gsap.set(
      [
        linksRef.current,
        contactRef.current,
      ],
      {
        autoAlpha: 0,
        x: -20,
      },
    )

    tl.current = gsap
      .timeline({
        paused: true,
      })
      .to(navRef.current, {
        duration: 1,
        ease: "power3.out",
        xPercent: 0,
      })
      .to(
        linksRef.current,
        {
          autoAlpha: 1,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.1,
          x: 0,
        },
        "<",
      )
      .to(
        contactRef.current,
        {
          autoAlpha: 1,
          duration: 0.5,
          ease: "power2.out",
          x: 0,
        },
        "<+0.2",
      )

    iconTl.current = gsap
      .timeline({
        paused: true,
      })
      .to(topLineRef.current, {
        duration: 0.3,
        ease: "power2.inOut",
        rotate: 45,
        y: 3.3,
      })
      .to(
        bottomLineRef.current,
        {
          duration: 0.3,
          ease: "power2.inOut",
          rotate: -45,
          y: -3.3,
        },
        "<",
      )
  }, [])

  useEffect(() => {
    let lastScrollY = window.scrollY
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      setShowBurger(currentScrollY <= lastScrollY || currentScrollY < 10)

      lastScrollY = currentScrollY
    }
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    if (isOpen) {
      tl.current.reverse()
      iconTl.current.reverse()
    } else {
      tl.current.play()
      iconTl.current.play()
    }
    setIsOpen(!isOpen)
  }

  if (location.pathname !== "/") return

  return (
    <>
      <nav
        className="fixed right-0 z-40 flex size-full flex-col justify-center bg-dark text-light md:w-1/2"
        ref={navRef}
      >
        <div className="flex size-full flex-col justify-center gap-8 px-4 font-display uppercase sm:px-8 ">
          <div className="flex flex-col gap-4">
            <FlowingMenu items={navbarLinks} itemsRef={linksRef} />
          </div>
          <div className="flex gap-8 p-4" ref={contactRef}>
            {socialLinks.map((socialLink) => (
              <a
                aria-label={socialLink.name}
                href={socialLink.href}
                key={socialLink.name}
                rel="noopener noreferrer"
                target="_blank"
              >
                {socialLink.icon && <socialLink.icon className="size-5 md:size-6 lg:size-7" />}
              </a>
            ))}
          </div>
        </div>
      </nav>
      <button
        aria-label="nav bar toggle"
        className="fixed top-8 right-8 z-50 flex size-10 cursor-pointer flex-col items-center justify-center gap-1 rounded-full bg-dark transition-all duration-300 md:size-12 lg:size-14 print:hidden"
        onClick={toggleMenu}
        style={{
          clipPath: showBurger || isOpen ? "circle(50% at 50% 50%)" : "circle(0% at 50% 50%)",
        }}
        type="button"
      >
        <span className="h-0.5 w-2/3 rounded-full bg-light" ref={topLineRef}></span>
        <span className="h-0.5 w-2/3 rounded-full bg-light" ref={bottomLineRef}></span>
      </button>
    </>
  )
}
