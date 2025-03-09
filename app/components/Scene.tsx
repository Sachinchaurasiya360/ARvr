'use client'

import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, Stage } from '@react-three/drei'
import { useResponsiveCamera } from '../hooks/useResponsiveCamera'

function OfficeModel({ scale = 1 }) {
  const { scene } = useGLTF('/models/modern_office_interior.glb')
  
  return (
    <primitive 
      object={scene} 
      scale={scale} 
      position={[0, 0, 0]}
      rotation={[0, -Math.PI / 4, 0]}
    />
  )
}

function OfficeScene() {
  useResponsiveCamera()

  return (
    <>
      <Stage environment="city" intensity={0.5}>
        <OfficeModel scale={0.02} />
      </Stage>

      <OrbitControls 
        enableDamping={true}
        dampingFactor={0.05}
        rotateSpeed={0.5}
        enablePan={true}
        panSpeed={0.5}
        enableZoom={true}
        zoomSpeed={0.5}
        minDistance={0.1}
        maxDistance={100}
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2}
        target={[0, 0, 0]}
        enableZoomLock={true}
        zoomToCursor={true}
      />
    </>
  )
}

// Preload the model
useGLTF.preload('/models/modern_office_interior.glb')

export default function Scene() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Suspense fallback={null}>
      <Canvas
        camera={{ 
          position: [5, 3, 5], 
          fov: 45,
          near: 0.01,
          far: 1000,
          zoom: 1
        }}
        shadows
        dpr={[1, 2]}
        gl={{ 
          antialias: true,
          alpha: false,
          preserveDrawingBuffer: true
        }}
      >
        <color attach="background" args={['#f0f0f0']} />
        <OfficeScene />
      </Canvas>
    </Suspense>
  )
} 