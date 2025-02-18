"use client"

import type React from "react"

import { useState } from "react"

interface FormData {
  goal: string
  timeframe: string
  currentStatus: string
  additionalInfo: string
}

interface TextInputFormProps {
  onSubmit: (formData: FormData) => void
  task: "finance" | "health" | "marketing"
}

export default function TextInputForm({ onSubmit, task }: TextInputFormProps) {
  const [formData, setFormData] = useState<FormData>({
    goal: "",
    timeframe: "",
    currentStatus: "",
    additionalInfo: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const placeholderText = {
    finance: {
      goal: "Enter your financial goal (e.g., 'Save $10,000')",
      timeframe: "Enter the timeframe (e.g., '1 year')",
      currentStatus: "Enter your current savings or income",
      additionalInfo: "Any additional financial information",
    },
    health: {
      goal: "Enter your health goal (e.g., 'Lose 10 pounds')",
      timeframe: "Enter the timeframe (e.g., '3 months')",
      currentStatus: "Enter your current weight or fitness level",
      additionalInfo: "Any additional health information",
    },
    marketing: {
      goal: "Enter your marketing goal (e.g., 'Increase website traffic by 50%')",
      timeframe: "Enter the timeframe (e.g., 'This quarter')",
      currentStatus: "Enter your current website traffic or conversion rate",
      additionalInfo: "Any additional marketing information",
    },
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField
          name="goal"
          value={formData.goal}
          onChange={handleChange}
          placeholder={placeholderText[task].goal}
          label="Goal"
        />
        <InputField
          name="timeframe"
          value={formData.timeframe}
          onChange={handleChange}
          placeholder={placeholderText[task].timeframe}
          label="Timeframe"
        />
        <InputField
          name="currentStatus"
          value={formData.currentStatus}
          onChange={handleChange}
          placeholder={placeholderText[task].currentStatus}
          label="Current Status"
        />
        <InputField
          name="additionalInfo"
          value={formData.additionalInfo}
          onChange={handleChange}
          placeholder={placeholderText[task].additionalInfo}
          label="Additional Information"
        />
      </div>
      <button
        type="submit"
        className="w-full btn-gradient text-white px-8 py-4 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg text-xl font-semibold"
      >
        Analyze
      </button>
    </form>
  )
}

function InputField({
  name,
  value,
  onChange,
  placeholder,
  label,
}: {
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  label: string
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full p-4 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-gray-800 placeholder-gray-500 shadow-sm text-lg"
      />
    </div>
  )
}

