import { Lightbulb } from "lucide-react"

interface AIInsightsProps {
  insights: string
  isLoading: boolean
  task: "finance" | "health" | "marketing"
}

const generateDummyInsights = (task: "finance" | "health" | "marketing") => {
  const insights = {
    finance: [
      "Consider adjusting your monthly budget to allocate more towards your savings goal.",
      "Look into high-yield savings accounts or investment options to maximize your returns.",
      "Identify areas of unnecessary spending and create a plan to reduce these expenses.",
      "Set up automatic transfers to your savings account to ensure consistent progress.",
      "Consider discussing your financial goals with a professional advisor for personalized strategies.",
    ],
    health: [
      "Create a balanced meal plan that aligns with your health objectives.",
      "Establish a consistent exercise routine that combines cardio and strength training.",
      "Prioritize getting adequate sleep each night to support your overall health.",
      "Consider tracking your progress using a fitness app or journal.",
      "Don't forget to include stress-management techniques in your health plan.",
    ],
    marketing: [
      "Develop a content strategy that focuses on your target audience's needs and interests.",
      "Optimize your website for search engines to improve organic traffic.",
      "Leverage social media platforms to engage with your audience and increase brand awareness.",
      "Consider implementing email marketing campaigns to nurture leads and retain customers.",
      "Analyze your marketing metrics regularly and adjust your strategies accordingly.",
    ],
  }

  return insights[task].map((insight) => `• ${insight}`).join("\n\n")
}

export default function AIInsights({ insights, isLoading, task }: AIInsightsProps) {
  const displayInsights = insights || generateDummyInsights(task)

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg glass-card hover-lift">
      <h2 className="text-3xl font-bold mb-6 text-gradient flex items-center">
        <Lightbulb className="mr-2 w-8 h-8" />
        AI Insights
      </h2>
      {isLoading ? (
        <div className="flex items-center justify-center h-40">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
        </div>
      ) : displayInsights ? (
        <div className="prose prose-lg max-w-none">
          {displayInsights.split("\n\n").map((paragraph, index) => (
            <p key={index} className="mb-4 text-gray-800 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 italic text-lg">No insights available. Please try again later.</p>
      )}
    </div>
  )
}

