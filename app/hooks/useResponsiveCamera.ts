'use client'

import { useThree } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import { PerspectiveCamera } from 'three'

export function useResponsiveCamera() {
  const { camera, size } = useThree()
  const lastZoom = useRef<number | null>(null)

  useEffect(() => {
    if (!camera || !size) return

    const handleResize = () => {
      try {
        // Store current zoom level if it exists
        if (camera instanceof PerspectiveCamera) {
          lastZoom.current = lastZoom.current || camera.zoom
        }

        // Adjust camera based on screen size
        if (size.width < 480) {
          // Mobile
          camera.position.set(8, 4, 8)
          if (camera instanceof PerspectiveCamera) {
            camera.fov = 60
            // Restore zoom level if it exists
            if (lastZoom.current) {
              camera.zoom = lastZoom.current
            }
            camera.updateProjectionMatrix()
          }
        } else if (size.width < 768) {
          // Tablet
          camera.position.set(6, 3, 6)
          if (camera instanceof PerspectiveCamera) {
            camera.fov = 50
            if (lastZoom.current) {
              camera.zoom = lastZoom.current
            }
            camera.updateProjectionMatrix()
          }
        } else {
          // Desktop
          camera.position.set(5, 3, 5)
          if (camera instanceof PerspectiveCamera) {
            camera.fov = 45
            if (lastZoom.current) {
              camera.zoom = lastZoom.current
            }
            camera.updateProjectionMatrix()
          }
        }
      } catch (error) {
        console.error('Error adjusting camera:', error)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [camera, size])

  // Update zoom level when it changes
  useEffect(() => {
    if (camera instanceof PerspectiveCamera) {
      const handleZoomChange = () => {
        lastZoom.current = camera.zoom
      }
      
      camera.addEventListener('change', handleZoomChange)
      return () => camera.removeEventListener('change', handleZoomChange)
    }
  }, [camera])

  return null
} 