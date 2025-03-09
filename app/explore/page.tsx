'use client'

import dynamic from 'next/dynamic'
import { Suspense, useState, useEffect } from 'react'
import LoadingSpinner from '../components/LoadingSpinner'

// Dynamically import the 3D scene component with no SSR
const Scene = dynamic(
  () => import('../components/Scene'),
  {
    ssr: false,
    loading: () => <LoadingSpinner message="Loading 3D Environment..." />
  }
)

export default function ExplorePage() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Modern Office Environment</h1>
        <p className="text-gray-600 mb-8">
          Experience a modern office environment in immersive 3D. Navigate through the space to understand the work environment better.
        </p>
        <div className="w-full h-[600px] bg-white rounded-lg shadow-lg overflow-hidden">
          {isClient ? <Scene /> : <LoadingSpinner message="Initializing 3D Environment..." />}
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Controls</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Left click + drag to rotate the view</li>
            <li>Right click + drag to pan</li>
            <li>Scroll to zoom in/out</li>
            <li className="md:hidden">Pinch to zoom, two fingers to rotate and pan</li>
          </ul>
        </div>

        <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">About This Space</h2>
          <p className="text-gray-600 mb-4">
            This modern office environment showcases a typical workspace in contemporary organizations. The space includes:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Open workspace layout</li>
            <li>Modern office furniture and equipment</li>
            <li>Collaborative meeting areas</li>
            <li>Natural lighting and ergonomic design</li>
          </ul>
        </div>
      </div>
    </div>
  )
} 