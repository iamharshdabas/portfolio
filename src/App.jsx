import { ReactLenis } from "lenis/react"
import { Navbar } from "./components/Navbar"
import { About } from "./sections/About"
import { Hero } from "./sections/Hero"
import { Services } from "./sections/Services"
import { ServicesSummary } from "./sections/ServicesSummary"

const App = () => {
  return (
    <ReactLenis root>
      <div className="relative min-h-screen w-screen bg-light font-sans text-dark">
        <Navbar />
        <Hero />
        <ServicesSummary />
        <Services />
        <About />
      </div>
    </ReactLenis>
  )
}

export default App
