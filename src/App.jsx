import { Navbar } from "./components/Navbar"
import { Hero } from "./sections/Hero"
import { ServicesSummary } from "./sections/ServicesSummary"

const App = () => {
  return (
    <div className="relative min-h-screen w-screen bg-dark font-sans text-light">
      <Navbar />
      <Hero />
      <ServicesSummary />
    </div>
  )
}

export default App
