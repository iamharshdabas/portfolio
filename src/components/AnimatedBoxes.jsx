import { useGSAP } from "@gsap/react"
import { useFrame, useThree } from "@react-three/fiber"
import gsap from "gsap"
import { useRef } from "react"
import { ExtrudeGeometry, MeshPhysicalMaterial, Shape } from "three"

const shape = new Shape()
const angleStep = Math.PI * 0.5
const radius = 1

shape.absarc(2, 2, radius, angleStep * 0, angleStep * 1)
shape.absarc(-2, 2, radius, angleStep * 1, angleStep * 2)
shape.absarc(-2, -2, radius, angleStep * 2, angleStep * 3)
shape.absarc(2, -2, radius, angleStep * 3, angleStep * 4)

const extrudeSettings = {
  bevelEnabled: true,
  bevelSegments: 20,
  bevelSize: 0.05,
  bevelThickness: 0.05,
  curveSegments: 20,
  depth: 0.2,
}

const geometry = new ExtrudeGeometry(shape, extrudeSettings)
geometry.center()

const material = new MeshPhysicalMaterial({
  color: "#000",
  iridescence: 1,
  iridescenceIOR: 2,
  iridescenceThicknessRange: [
    0,
    1024,
  ],
  metalness: 1,
  reflectivity: 1,
  roughness: 0.2,
})

const Box = ({ position, rotation }) => {
  return <mesh geometry={geometry} material={material} position={position} rotation={rotation} />
}

export const AnimatedBoxes = () => {
  const groupRef = useRef()

  useFrame((_state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += delta * 0.05
    }
  })

  const boxes = Array.from(
    {
      length: 50,
    },
    (_, index) => ({
      id: index,
      position: [
        (index - 25) * 0.75,
        0,
        0,
      ],
      rotation: [
        (index - 10) * 0.1,
        Math.PI / 2,
        0,
      ],
    }),
  )

  return (
    <group
      position={[
        0,
        2,
        0,
      ]}
      ref={groupRef}
    >
      {boxes.map((box) => (
        <Box key={box.id} position={box.position} rotation={box.rotation} />
      ))}
    </group>
  )
}

export const CameraAnimation = () => {
  const { camera } = useThree()

  useGSAP(() => {
    camera.lookAt(100, 10, 10)
    const tl = gsap.timeline()
    tl.fromTo(
      camera.position,
      {
        x: -25,
        y: 0,
        z: 10,
      },
      {
        duration: 6,
        ease: "back.InOut",
        onUpdate: () => {
          camera.lookAt(0, 0, 0)
        },
        x: 0,
        y: 0,
        z: 15,
      },
    )
    tl.to(
      camera.position,
      {
        duration: 4,
        ease: "power1.in",
        z: 25,
      },
      "<+2",
    )
  }, [
    camera,
  ])

  return null
}
