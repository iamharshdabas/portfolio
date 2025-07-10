import { ReactLenis } from "lenis/react"
import { Navbar } from "./components/Navbar"
import { About } from "./sections/About"
import Contact from "./sections/Contact"
import ContactSummary from "./sections/ContactSummary"
import { Hero } from "./sections/Hero"
import { Services } from "./sections/Services"
import { ServicesSummary } from "./sections/ServicesSummary"
import Works from "./sections/Work"

const App = () => {
  return (
    <ReactLenis root>
      <div className="relative min-h-screen w-screen bg-light font-sans text-dark">
        <Navbar />
        <main>
          <Hero />
          <ServicesSummary />
          <Services />
          <About />
          <Works />
          <ContactSummary />
          <Contact />
        </main>
      </div>
    </ReactLenis>
  )
}

export default App
