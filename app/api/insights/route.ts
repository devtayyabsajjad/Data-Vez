import { NextResponse } from "next/server"
import Groq from "groq-sdk"

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
})

export async function POST(req: Request) {
  const { input, task } = await req.json()

  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `You are an AI assistant that provides insights based on user input about their ${task} goals. Analyze the input and provide actionable recommendations.`,
        },
        {
          role: "user",
          content: `Analyze this ${task} goal and provide insights: ${input}`,
        },
      ],
      model: "llama-3.3-70b-versatile",
    })

    const insights = chatCompletion.choices[0]?.message?.content || "Unable to generate insights."

    return NextResponse.json({ insights })
  } catch (error) {
    console.error("Error calling Groq API:", error)
    return NextResponse.json({ error: "Failed to generate insights" }, { status: 500 })
  }
}

