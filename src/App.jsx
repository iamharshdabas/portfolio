import { ReactLenis } from "lenis/react"
import { lazy, Suspense } from "react"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import Details from "./pages/Details"
import Resume from "./pages/Resume"

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

const Home = () => (
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
)

const App = () => {
  return (
    <ReactLenis root>
      <div className="relative min-h-screen w-screen bg-light font-sans text-dark">
        <Router>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Resume />} path="/resume" />
            <Route element={<Details />} path="/details" />
          </Routes>
        </Router>
      </div>
    </ReactLenis>
  )
}

export default App
