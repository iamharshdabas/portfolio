import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { useMediaQuery } from "react-responsive"
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
  const isSm = useMediaQuery({
    maxWidth: "40rem",
  })
  const boxesLength = isSm ? 20 : 50
  const boxesPerSide = isSm ? 10 : 25

  useFrame((_state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += delta * 0.05
    }
  })

  const boxes = Array.from(
    {
      length: boxesLength,
    },
    (_, index) => ({
      id: index,
      position: [
        (index - boxesPerSide) * 0.75,
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
