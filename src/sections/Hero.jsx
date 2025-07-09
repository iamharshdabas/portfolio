import { useGSAP } from "@gsap/react"
import { Float, Stars } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import gsap from "gsap"
import { useRef } from "react"
import { AnimatedBoxes, CameraAnimation } from "../components/AnimatedBoxes"
import { AnimatedHeader } from "../components/AnimatedHeader"

const aboutText = `I help growing brands and startups gain an
unfair advantage through premium
results driven webs/apps`

export const Hero = () => {
  const cameraRef = useRef(null)

  useGSAP(() => {
    gsap.fromTo(
      cameraRef.current,
      {
        duration: 5,
        ease: "power3.inOut",
        x: -5,
        y: 0,
        z: 5,
      },
      {
        duration: 5,
        ease: "power3.inOut",
        x: 0,
      },
    )
  }, [])

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
          ref={cameraRef}
        >
          <CameraAnimation />
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
            speed={0.5}
          >
            <AnimatedBoxes />
          </Float>
          <Stars count={5000} depth={5} factor={4} fade radius={100} saturation={0} speed={1} />
        </Canvas>
      </div>
      <div className="z-10">
        <AnimatedHeader subTitle="404 no bugs found" text={aboutText} textColor="text-light" title="harsh dabas" />
      </div>
    </section>
  )
}
