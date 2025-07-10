import { ReactLenis } from "lenis/react"
import { lazy, Suspense } from "react"
import { Navbar } from "./components/Navbar"

const About = lazy(() =>
  import("./sections/About").then((module) => ({
    default: module.About,
  })),
)
const Contact = lazy(() => import("./sections/Contact"))
const ContactSummary = lazy(() => import("./sections/ContactSummary"))
const Hero = lazy(() =>
  import("./sections/Hero").then((module) => ({
    default: module.Hero,
  })),
)
const Services = lazy(() =>
  import("./sections/Services").then((module) => ({
    default: module.Services,
  })),
)
const ServicesSummary = lazy(() =>
  import("./sections/ServicesSummary").then((module) => ({
    default: module.ServicesSummary,
  })),
)
const Works = lazy(() => import("./sections/Work"))

const App = () => {
  return (
    <ReactLenis root>
      <div className="relative min-h-screen w-screen bg-light font-sans text-dark">
        <Navbar />
        <main>
          <Suspense fallback={<div />}>
            <Hero />
            <ServicesSummary />
            <Services />
            <About />
            <Works />
            <ContactSummary />
            <Contact />
          </Suspense>
        </main>
      </div>
    </ReactLenis>
  )
}

export default App
