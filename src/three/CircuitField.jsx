import { useMemo, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

/**
 * Builds a Fibonacci-distributed point sphere and connects nearby
 * points into a wireframe graph -- part circuit-board trace,
 * part constellation chart. Unlit, colored with the copper / signal
 * palette so it reads as a schematic rather than generic particles.
 */
function buildGraph(count, radius, linkDistance) {
  const points = []
  const goldenAngle = Math.PI * (3 - Math.sqrt(5))

  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2
    const r = Math.sqrt(1 - y * y)
    const theta = goldenAngle * i
    const x = Math.cos(theta) * r
    const z = Math.sin(theta) * r
    points.push(new THREE.Vector3(x, y, z).multiplyScalar(radius))
  }

  const edgePositions = []
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      if (points[i].distanceTo(points[j]) < linkDistance) {
        edgePositions.push(points[i].x, points[i].y, points[i].z)
        edgePositions.push(points[j].x, points[j].y, points[j].z)
      }
    }
  }

  const pointPositions = new Float32Array(points.length * 3)
  const pointColors = new Float32Array(points.length * 3)
  const copper = new THREE.Color('#C87F4A')
  const signal = new THREE.Color('#6FE3C4')
  const dim = new THREE.Color('#5B5F68')

  points.forEach((p, i) => {
    pointPositions[i * 3] = p.x
    pointPositions[i * 3 + 1] = p.y
    pointPositions[i * 3 + 2] = p.z
    const roll = Math.random()
    const c = roll < 0.12 ? signal : roll < 0.28 ? copper : dim
    pointColors[i * 3] = c.r
    pointColors[i * 3 + 1] = c.g
    pointColors[i * 3 + 2] = c.b
  })

  return {
    pointPositions,
    pointColors,
    edgePositions: new Float32Array(edgePositions),
  }
}

function Graph() {
  const groupRef = useRef()
  const target = useRef({ x: 0, y: 0 })
  const { pointPositions, pointColors, edgePositions } = useMemo(
    () => buildGraph(150, 2.6, 0.85),
    []
  )

  const { size } = useThree()

  useFrame((state, delta) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y += delta * 0.06
    groupRef.current.rotation.x += delta * 0.012

    // subtle pointer parallax
    const px = (state.pointer.x * Math.PI) / 18
    const py = (state.pointer.y * Math.PI) / 18
    target.current.x += (py - target.current.x) * 0.03
    target.current.y += (px - target.current.y) * 0.03
    groupRef.current.rotation.x += target.current.x * delta
    groupRef.current.rotation.y += target.current.y * delta
  })

  const scale = size.width < 640 ? 0.72 : 1

  return (
    <group ref={groupRef} scale={scale}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={edgePositions.length / 3}
            array={edgePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#3A4048" transparent opacity={0.55} />
      </lineSegments>

      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={pointPositions.length / 3}
            array={pointPositions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={pointColors.length / 3}
            array={pointColors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.045} vertexColors sizeAttenuation transparent opacity={0.95} />
      </points>

      <mesh>
        <icosahedronGeometry args={[2.6, 1]} />
        <meshBasicMaterial color="#22262d" wireframe transparent opacity={0.25} />
      </mesh>
    </group>
  )
}

export default function CircuitField({ className }) {
  return (
    <Canvas
      className={className}
      dpr={[1, 1.8]}
      camera={{ position: [0, 0, 6.2], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
    >
      <Graph />
    </Canvas>
  )
}
