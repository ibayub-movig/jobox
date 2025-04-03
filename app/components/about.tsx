import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function About() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-12">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">About</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Scratching my own Itch
          </p>
        </div>
        <div className="mx-auto max-w-3xl">
          <Card><CardHeader></CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-gray-600">
                I'm a freelancer working in product management, UX, and MVP development. I'm always on the lookout for new interesting opportunities, especially focused on social innovation.
                I've found the best opps through newsletters but it was a pain going through each long thread. After hacking a solution for myself, I'm sharing a new version for anyone interested!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

