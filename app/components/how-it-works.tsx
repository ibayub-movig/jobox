import { ArrowRight, Mail, Inbox, LayoutDashboard, CheckSquare, Square, FolderOpen, FileText } from 'lucide-react'

const steps = [
  {
    name: 'Add your sources & preferences',
    description: 'Connect your email or select your newsletters, with your target role(s)',
    visual: ({ className }: { className?: string }) => (
      <div className={`${className} relative`}>
        <div className="absolute inset-0 bg-indigo-50 rounded-lg" />
        <div className="relative h-full w-full flex items-center justify-center p-6">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-[240px] aspect-[4/3]">
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="h-5 w-5 text-indigo-600" />
                <div className="h-2 w-16 bg-indigo-100 rounded" />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <CheckSquare className="h-4 w-4 text-indigo-600" />
                  <div className="h-2 w-24 bg-indigo-100 rounded" />
                </div>
                <div className="flex items-center gap-2">
                  <Square className="h-4 w-4 text-gray-300" />
                  <div className="h-2 w-20 bg-gray-100 rounded" />
                </div>
                <div className="flex items-center gap-2">
                  <CheckSquare className="h-4 w-4 text-indigo-600" />
                  <div className="h-2 w-28 bg-indigo-100 rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    name: 'Jobox organizes and creates your board',
    description: 'We extract and standardize the job details and set up your board',
    visual: ({ className }: { className?: string }) => (
      <div className={`${className} relative`}>
        <div className="absolute inset-0 bg-indigo-50 rounded-lg" />
        <div className="relative h-full w-full flex items-center justify-center p-6">
          <div className="relative">
            <div className="flex items-center gap-4">
              <div className="relative">
                <FolderOpen className="h-16 w-16 text-indigo-600" />
                <div className="absolute -right-1 -top-1">
                  <div className="flex -space-x-2">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="h-3 w-3 rounded-full bg-indigo-600 animate-pulse"
                        style={{ animationDelay: `${i * 0.15}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <ArrowRight className="h-6 w-6 text-indigo-600" />
              <div className="relative">
                <div className="bg-white rounded-lg shadow-lg p-3">
                  <div className="space-y-2">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-indigo-600" />
                        <div className="h-2 w-16 bg-indigo-100 rounded" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute -right-2 -top-2">
                  <div className="animate-ping h-3 w-3 rounded-full bg-green-500" />
                  <div className="absolute inset-0 h-3 w-3 rounded-full bg-green-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    name: 'Apply and track',
    description: 'Access your personal board and land your next opp 🚀',
    visual: ({ className }: { className?: string }) => (
      <div className={`${className} relative`}>
        <div className="absolute inset-0 bg-indigo-50 rounded-lg" />
        <div className="relative h-full w-full flex items-center justify-center p-6">
          <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-[240px] aspect-[4/3]">
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-2 mb-4">
                <LayoutDashboard className="h-5 w-5 text-indigo-600" />
                <div className="h-2 w-16 bg-indigo-100 rounded" />
              </div>
              <div className="space-y-3">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="h-2 w-24 bg-indigo-100 rounded" />
                    <div className="h-2 w-12 bg-indigo-100 rounded" />
                  </div>
                ))}
              </div>
              <div className="mt-auto pt-4 flex justify-end">
                <div className="h-6 w-16 bg-indigo-600 rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
]

export default function HowItWorks() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-24 sm:py-32" id="how-it-works">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">How It Works</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Land your next gig in 3 steps
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {steps.map((step, stepIdx) => (
              <div key={step.name} className="flex flex-col items-center">
                <dt className="flex flex-col items-center gap-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white text-lg font-semibold">
                    {stepIdx + 1}
                  </div>
                  <div className="h-48 w-full mb-4">
                    <step.visual className="w-full h-full" />
                  </div>
                  <div className="text-lg font-semibold leading-7 text-gray-900">{step.name}</div>
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 text-center">
                  <p className="flex-auto">{step.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

