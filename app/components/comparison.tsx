import { Check, X } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const platforms = [
  {
    name: "Job Boards",
    description: "LinkedIn, Indeed, etc.",
    features: [
      { name: "Centralized & Organized", status: true },
      { name: "Irelevant Jobs", status: false },
      { name: "Easy to Track", status: true },
    ],
  },
  {
    name: "Niche Newsletters",
    description: "Industry & Role-specific",
    features: [
      { name: "Long Threads & Different Formats", status: false },
      { name: "Curated Jobs", status: true },
      { name: "Hard to Track", status: false },
    ],
  },
]

const jobox = {
  name: "Jobox",
  description: "Your Personal Job Board",
  features: [
    { name: "Centralized & Organized", status: true },
    { name: "Curated to Me", status: true },
    { name: "Easy to Track", status: true },
  ],
}

export default function Comparison() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-12">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">The Best of Both</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Organized job board for your newsletter emails
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            {platforms.map((platform) => (
              <Card key={platform.name} className="transition-all duration-300 hover:shadow-md">
                <CardHeader className="bg-gray-50 border-b border-gray-200">
                  <CardTitle className="text-xl font-bold">{platform.name}</CardTitle>
                  <p className="text-sm text-gray-600">{platform.description}</p>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    {platform.features.map((feature) => (
                      <li key={feature.name} className="flex items-center gap-3">
                        {feature.status ? (
                          <div className="rounded-full p-1 bg-green-100 text-green-600">
                            <Check className="h-4 w-4" />
                          </div>
                        ) : (
                          <div className="rounded-full p-1 bg-red-100 text-red-600">
                            <X className="h-4 w-4" />
                          </div>
                        )}
                        <p className="text-sm font-medium text-gray-900">{feature.name}</p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex items-center">
            <Card className="w-full transition-all duration-300 hover:shadow-lg border-2 border-indigo-500">
              <CardHeader className="bg-indigo-50 border-b border-indigo-200">
                <CardTitle className="text-2xl font-bold text-indigo-600">{jobox.name}</CardTitle>
                <p className="text-sm text-indigo-600">{jobox.description}</p>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {jobox.features.map((feature) => (
                    <li key={feature.name} className="flex items-center gap-3">
                      <div className="rounded-full p-1 bg-indigo-100 text-indigo-600">
                        <Check className="h-5 w-5" />
                      </div>
                      <p className="text-base font-medium text-gray-900">{feature.name}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

