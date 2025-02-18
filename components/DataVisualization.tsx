"use client"

import { useState } from "react"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts"

interface DataPoint {
  name: string
  value: number
}

interface DataVisualizationProps {
  data: DataPoint[]
  task: "finance" | "health" | "marketing"
}

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7300", "#0088FE"]

export default function DataVisualization({ data, task }: DataVisualizationProps) {
  const [chartType, setChartType] = useState<"bar" | "line" | "pie">("bar")

  const renderChart = () => {
    switch (chartType) {
      case "bar":
        return (
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        )
      case "line":
        return (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        )
      case "pie":
        return (
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        )
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg glass-card hover-lift">
      <h2 className="text-3xl font-bold mb-4 text-gradient">
        {task.charAt(0).toUpperCase() + task.slice(1)} Visualization
      </h2>
      <div className="mb-4 flex space-x-2">
        <ChartTypeButton type="bar" currentType={chartType} setChartType={setChartType} />
        <ChartTypeButton type="line" currentType={chartType} setChartType={setChartType} />
        <ChartTypeButton type="pie" currentType={chartType} setChartType={setChartType} />
      </div>
      <ResponsiveContainer width="100%" height={300}>
        {renderChart()}
      </ResponsiveContainer>
    </div>
  )
}

function ChartTypeButton({
  type,
  currentType,
  setChartType,
}: { type: "bar" | "line" | "pie"; currentType: string; setChartType: (type: "bar" | "line" | "pie") => void }) {
  return (
    <button
      onClick={() => setChartType(type)}
      className={`px-4 py-2 rounded-md transition-all duration-300 text-sm font-semibold ${
        currentType === type ? "btn-gradient text-white" : "bg-gray-200 text-gray-700 hover:bg-purple-100"
      }`}
    >
      {type.charAt(0).toUpperCase() + type.slice(1)}
    </button>
  )
}

