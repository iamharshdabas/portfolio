/** biome-ignore-all lint/suspicious/noArrayIndexKey: false */

import { gsap } from "gsap"
import { Fragment, useMemo, useRef } from "react"
import { Link } from "react-scroll"
import { ImagePill } from "./ImagePill"

const MenuItem = ({ link, text, image, itemsRef, idx }) => {
  const itemRef = useRef(null)
  const marqueeRef = useRef(null)
  const marqueeInnerRef = useRef(null)

  const animationDefaults = {
    duration: 0.6,
    ease: "expo",
  }

  const findClosestEdge = (mouseX, mouseY, width, height) => {
    const topEdgeDist = (mouseX - width / 2) ** 2 + mouseY ** 2
    const bottomEdgeDist = (mouseX - width / 2) ** 2 + (mouseY - height) ** 2
    return topEdgeDist < bottomEdgeDist ? "top" : "bottom"
  }

  const handleMouseEnter = (ev) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return
    gsap.killTweensOf([
      marqueeRef.current,
      marqueeInnerRef.current,
    ])
    const rect = itemRef.current.getBoundingClientRect()
    const edge = findClosestEdge(ev.clientX - rect.left, ev.clientY - rect.top, rect.width, rect.height)
    const tl = gsap.timeline({
      defaults: animationDefaults,
    })
    tl.set(marqueeRef.current, {
      y: edge === "top" ? "-101%" : "101%",
    })
      .set(marqueeInnerRef.current, {
        y: edge === "top" ? "101%" : "-101%",
      })
      .to(
        [
          marqueeRef.current,
          marqueeInnerRef.current,
        ],
        {
          y: "0%",
        },
      )
  }

  const handleMouseLeave = (ev) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return
    gsap.killTweensOf([
      marqueeRef.current,
      marqueeInnerRef.current,
    ])
    const rect = itemRef.current.getBoundingClientRect()
    const edge = findClosestEdge(ev.clientX - rect.left, ev.clientY - rect.top, rect.width, rect.height)
    const tl = gsap.timeline({
      defaults: animationDefaults,
    })
    tl.to(marqueeRef.current, {
      y: edge === "top" ? "-101%" : "101%",
    }).to(
      marqueeInnerRef.current,
      {
        y: edge === "top" ? "101%" : "-101%",
      },
      0,
    )
  }

  const singleMarqueeSet = useMemo(
    () =>
      Array.from({
        length: 4,
      }).map((_, idx) => (
        <Fragment key={idx}>
          <span className="whitespace-nowrap text-3xl text-dark md:text-4xl lg:text-5xl">{text}</span>
          <ImagePill image={image} />
        </Fragment>
      )),
    [
      text,
      image,
    ],
  )

  return (
    <div
      className="relative flex-1 overflow-hidden rounded-4xl p-4"
      ref={(el) => {
        itemRef.current = el
        itemsRef.current[idx] = el
      }}
    >
      <Link
        className="relative flex h-full cursor-pointer text-3xl transition-all md:text-4xl lg:text-5xl"
        duration={1000}
        offset={0}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        smooth
        to={link}
      >
        {text}
      </Link>
      <div
        className="pointer-events-none absolute top-0 left-0 h-full w-full translate-y-[101%] overflow-hidden bg-light"
        ref={marqueeRef}
      >
        <div className="flex h-full w-full" ref={marqueeInnerRef}>
          <div className="relative flex h-full w-max animate-marquee items-center will-change-transform">
            <div className="flex shrink-0 items-center">{singleMarqueeSet}</div>
            <div className="flex shrink-0 items-center">{singleMarqueeSet}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const FlowingMenu = ({ items = [], itemsRef }) => {
  return items.map((item, idx) => <MenuItem idx={idx} itemsRef={itemsRef} key={idx} {...item} />)
}
