'use client'

import { useThree } from '@react-three/fiber'
import { useEffect } from 'react'

export function useResponsiveCamera() {
  const { camera, size } = useThree()

  useEffect(() => {
    if (!camera || !size) return

    const handleResize = () => {
      try {
        // Adjust camera based on screen size
        if (size.width < 480) {
          // Mobile
          camera.position.set(8, 4, 8)
          camera.fov = 60
        } else if (size.width < 768) {
          // Tablet
          camera.position.set(6, 3, 6)
          camera.fov = 50
        } else {
          // Desktop
          camera.position.set(5, 3, 5)
          camera.fov = 45
        }
        camera.updateProjectionMatrix()
      } catch (error) {
        console.error('Error adjusting camera:', error)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [camera, size])

  return null
} 