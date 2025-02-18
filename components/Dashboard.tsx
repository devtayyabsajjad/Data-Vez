"use client"

import { useState } from "react"
import TextInputForm, { FormInputData } from "./TextInputForm"
import DataVisualization from "./DataVisualization"
import AIInsights from "./AIInsights"

type Task = "finance" | "health" | "marketing"

export default function Dashboard() {
  const [task, setTask] = useState<Task>("finance")
  const [chartData, setChartData] = useState<{ name: string; value: number }[]>([])
  const [aiInsights, setAIInsights] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showInsights, setShowInsights] = useState(false)

  const handleSubmit = async (formData: FormInputData) => {
    setIsLoading(true)
    setShowInsights(true)

    // Mock chart data generation (replace with actual data processing logic)
    const newChartData: { name: string; value: number }[] = [
      { name: "Mon", value: Math.floor(Math.random() * 1000) },
      { name: "Tue", value: Math.floor(Math.random() * 1000) },
      { name: "Wed", value: Math.floor(Math.random() * 1000) },
      { name: "Thu", value: Math.floor(Math.random() * 1000) },
      { name: "Fri", value: Math.floor(Math.random() * 1000) },
    ]
    setChartData(newChartData)

    // Fetch AI insights
    try {
      const response = await fetch("/api/insights", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input: JSON.stringify(formData), task }),
      })
      const data = await response.json()
      setAIInsights(data.insights)
    } catch (error) {
      console.error("Error fetching AI insights:", error)
      setAIInsights("") // Clear insights to trigger dummy data
    }

    setIsLoading(false)
  }

  return (
    <div className="bg-white bg-opacity-90 rounded-2xl shadow-neon p-8 animate-gradient max-w-6xl mx-auto">
      <div className="mb-8">
        <h2 className="text-4xl font-bold mb-6 text-gradient">Select Task</h2>
        <div className="flex flex-wrap gap-4">
          <TaskButton task="finance" currentTask={task} setTask={setTask} />
          <TaskButton task="health" currentTask={task} setTask={setTask} />
          <TaskButton task="marketing" currentTask={task} setTask={setTask} />
        </div>
      </div>
      <TextInputForm onSubmit={handleSubmit} task={task} />
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <DataVisualization data={chartData} task={task} />
        {showInsights && <AIInsights insights={aiInsights} isLoading={isLoading} task={task} />}
      </div>
    </div>
  )
}

function TaskButton({ task, currentTask, setTask }: { task: Task; currentTask: Task; setTask: (task: Task) => void }) {
  return (
    <button
      onClick={() => setTask(task)}
      className={`px-8 py-4 rounded-md transition-all duration-300 transform hover:scale-105 shadow-md text-xl font-semibold ${
        currentTask === task ? "btn-gradient text-white" : "bg-white text-purple-600 hover:bg-purple-100"
      }`}
    >
      {task.charAt(0).toUpperCase() + task.slice(1)}
    </button>
  )
}

