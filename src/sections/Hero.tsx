import { Float, Stars } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { AnimatedBoxes } from "../components/AnimatedBoxes"
import { AnimatedHeader } from "../components/AnimatedHeader"

const aboutText = `I help growing brands and startups gain an
unfair advantage through premium
results driven webs/apps`

export const Hero = () => {
  return (
    <section className="relative flex min-h-screen flex-col justify-end py-8 uppercase sm:py-16" id="home">
      <div className="absolute inset-0 size-full">
        <Canvas
          camera={{
            fov: 40,
            position: [
              0,
              0,
              24,
            ],
          }}
        >
          <directionalLight
            intensity={15}
            position={[
              10,
              10,
              5,
            ]}
          />

          <Float
            floatIntensity={1}
            floatingRange={[
              1,
              1,
            ]}
            rotationIntensity={1}
            speed={1}
          >
            <AnimatedBoxes />
          </Float>
          <Stars count={5000} depth={5} factor={4} fade radius={100} saturation={0} speed={1} />
        </Canvas>
      </div>
      <div className="z-10">
        <AnimatedHeader h1="harsh dabas" h2={aboutText} p="404 no bugs found" />
      </div>
    </section>
  )
}
