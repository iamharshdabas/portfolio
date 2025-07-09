import { Navbar } from "./components/Navbar"
import { Hero } from "./sections/Hero"

const App = () => {
  return (
    <div className="relative min-h-screen w-screen bg-dark font-sans text-light">
      <Navbar />
      <Hero />
    </div>
  )
}

export default App
