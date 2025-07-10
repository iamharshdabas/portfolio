/** biome-ignore-all lint/suspicious/noAssignInExpressions: false */

import gsap from "gsap"
import { Observer } from "gsap/all"
import { useEffect, useRef } from "react"

gsap.registerPlugin(Observer)

export const Marquee = ({ items, className = "text-light bg-dark", Icon, reverse = false }) => {
  const containerRef = useRef(null)
  const itemsRef = useRef([])

  function horizontalLoop(items, config) {
    items = gsap.utils.toArray(items)
    config = config || {}
    let tl = gsap.timeline({
        defaults: {
          ease: "none",
        },
        onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100),
        paused: config.paused,
        repeat: config.repeat,
      }),
      length = items.length,
      startX = items[0].offsetLeft,
      times = [],
      widths = [],
      xPercents = [],
      curIndex = 0,
      pixelsPerSecond = (config.speed || 1) * 100,
      snap = config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
      totalWidth,
      curX,
      distanceToStart,
      distanceToLoop,
      item,
      i
    gsap.set(items, {
      // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
      xPercent: (i, el) => {
        const w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px")))
        xPercents[i] = snap((parseFloat(gsap.getProperty(el, "x", "px")) / w) * 100 + gsap.getProperty(el, "xPercent"))
        return xPercents[i]
      },
    })
    gsap.set(items, {
      x: 0,
    })
    totalWidth =
      items[length - 1].offsetLeft +
      (xPercents[length - 1] / 100) * widths[length - 1] -
      startX +
      items[length - 1].offsetWidth * gsap.getProperty(items[length - 1], "scaleX") +
      (parseFloat(config.paddingRight) || 0)
    for (i = 0; i < length; i++) {
      item = items[i]
      curX = (xPercents[i] / 100) * widths[i]
      distanceToStart = item.offsetLeft + curX - startX
      distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX")
      tl.to(
        item,
        {
          duration: distanceToLoop / pixelsPerSecond,
          xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
        },
        0,
      )
        .fromTo(
          item,
          {
            xPercent: snap(((curX - distanceToLoop + totalWidth) / widths[i]) * 100),
          },
          {
            duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
            immediateRender: false,
            xPercent: xPercents[i],
          },
          distanceToLoop / pixelsPerSecond,
        )
        .add(`label${i}`, distanceToStart / pixelsPerSecond)
      times[i] = distanceToStart / pixelsPerSecond
    }
    function toIndex(index, vars) {
      vars = vars || {}
      Math.abs(index - curIndex) > length / 2 && (index += index > curIndex ? -length : length) // always go in the shortest direction
      let newIndex = gsap.utils.wrap(0, length, index),
        time = times[newIndex]
      if (time > tl.time() !== index > curIndex) {
        // if we're wrapping the timeline's playhead, make the proper adjustments
        vars.modifiers = {
          time: gsap.utils.wrap(0, tl.duration()),
        }
        time += tl.duration() * (index > curIndex ? 1 : -1)
      }
      curIndex = newIndex
      vars.overwrite = true
      return tl.tweenTo(time, vars)
    }
    tl.next = (vars) => toIndex(curIndex + 1, vars)
    tl.previous = (vars) => toIndex(curIndex - 1, vars)
    tl.current = () => curIndex
    tl.toIndex = (index, vars) => toIndex(index, vars)
    tl.times = times
    tl.progress(1, true).progress(0, true) // pre-render for performance
    if (config.reversed) {
      tl.vars.onReverseComplete()
      tl.reverse()
    }
    return tl
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: false
  useEffect(() => {
    const tl = horizontalLoop(itemsRef.current, {
      paddingRight: 30,
      repeat: -1,
      reversed: reverse,
    })

    Observer.create({
      onChangeY(self) {
        let factor = 2.5
        if ((!reverse && self.deltaY < 0) || (reverse && self.deltaY > 0)) {
          factor *= -1
        }
        gsap
          .timeline({
            defaults: {
              ease: "none",
            },
          })
          .to(tl, {
            duration: 0.2,
            overwrite: true,
            timeScale: factor * 2.5,
          })
          .to(
            tl,
            {
              duration: 1,
              timeScale: factor / 2.5,
            },
            "+=0.3",
          )
      },
    })
    return () => tl.kill()
  }, [
    items,
    reverse,
  ])
  return (
    <div
      className={`flex h-16 w-full items-center overflow-hidden whitespace-nowrap md:h-24 ${className}`}
      ref={containerRef}
    >
      <div className="flex">
        {items.map((text, index) => (
          <span
            className="flex items-center gap-x-32 px-16 font-display text-lg uppercase tracking-widest md:text-xl lg:text-2xl"
            // biome-ignore lint/suspicious/noArrayIndexKey: false
            key={index}
            ref={(el) => (itemsRef.current[index] = el)}
          >
            {text} <Icon />
          </span>
        ))}
      </div>
    </div>
  )
}
