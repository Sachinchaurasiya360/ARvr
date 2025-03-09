import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Welcome to CareerVerse
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Experience your future career through immersive AR/VR simulations
        </p>
        <div className="flex justify-center">
          <Link 
            href="/explore"
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
          >
            Start Virtual Job Shadowing
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-16">
        <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-4">Immersive Experiences</h3>
          <p className="text-gray-600">
            Step into realistic workplace environments through AR/VR technology
          </p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-4">Interactive Learning</h3>
          <p className="text-gray-600">
            Learn about careers by doing actual tasks in virtual environments
          </p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-4">Real-World Insights</h3>
          <p className="text-gray-600">
            Experience day-to-day activities of different professions
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-gradient-to-r from-blue-100 to-purple-100 p-12 rounded-2xl">
        <h2 className="text-3xl font-bold mb-4">Ready to Experience Your Future Career?</h2>
        <p className="text-lg text-gray-700 mb-6">
          Join thousands of students who have experienced careers in virtual reality
        </p>
        <Link 
          href="/signup"
          className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition"
        >
          Get Started Now
        </Link>
      </section>
    </div>
  )
} 