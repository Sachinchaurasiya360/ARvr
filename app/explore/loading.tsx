export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-8 w-64 bg-gray-200 rounded mb-6"></div>
          <div className="h-4 w-full max-w-2xl bg-gray-200 rounded mb-8"></div>
          <div className="w-full h-[600px] bg-gray-200 rounded-lg"></div>
        </div>
      </div>
    </div>
  )
} 