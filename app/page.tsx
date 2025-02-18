import type React from "react"
import Link from "next/link"
import { ArrowRight, BarChart2, Brain, TrendingUp } from "lucide-react"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white bg-opacity-80 rounded-lg shadow-neon p-8 max-w-4xl w-full space-y-8 animate-gradient">
        <h1 className="text-5xl font-bold text-center mb-8 text-gradient">Welcome to DataViz Pro</h1>
        <p className="text-gray-800 text-xl text-center mb-8">
          DataViz Pro is an advanced multi-task data visualization dashboard that helps you track and analyze your
          finance, health, and marketing metrics with cutting-edge AI technology.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <FeatureCard
            icon={<BarChart2 className="w-12 h-12 text-purple-600" />}
            title="Interactive Charts"
            description="Visualize your data with dynamic and responsive charts"
          />
          <FeatureCard
            icon={<Brain className="w-12 h-12 text-pink-600" />}
            title="AI-Driven Insights"
            description="Get intelligent recommendations based on your data"
          />
          <FeatureCard
            icon={<TrendingUp className="w-12 h-12 text-indigo-600" />}
            title="Multi-Task Analysis"
            description="Track finance, health, and marketing metrics in one place"
          />
        </div>
        <div className="flex justify-center">
          <Link
            href="/dashboard"
            className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-md hover:from-purple-700 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 text-xl font-semibold flex items-center"
          >
            Go to Dashboard
            <ArrowRight className="ml-2 w-6 h-6" />
          </Link>
        </div>
      </div>
    </main>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white bg-opacity-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col items-center text-center">
        {icon}
        <h3 className="mt-4 text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </div>
  )
}

