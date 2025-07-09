import { AnimatedLine } from "./AnimatedLine"

export const AnimatedHeader = ({ p, h1, h2 }) => {
  return (
    <>
      <p className="px-4 font-light text-sm tracking-widest sm:px-8">{p}</p>
      <h1 className="px-4 py-8 font-bold font-display text-6xl sm:px-8 sm:text-7xl md:text-8xl">{h1}</h1>
      <AnimatedLine className="flex flex-col items-end px-4 text-end text-sm sm:px-8 md:text-base" text={h2} />
    </>
  )
}
