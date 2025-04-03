import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Filter, BookmarkPlus, CheckCircle, ArrowUpRight, Mail, Bell } from 'lucide-react'

export default function Dashboard() {
  const jobListings = [
    { title: "Senior UX Designer", company: "TechCorp", location: "Remote", type: "Part-time", from: "DesignJobs Newsletter", bestFit: true },
    { title: "Product Designer", company: "DesignWiz", location: "San Francisco, CA", type: "Remote", from: "UX Weekly", bestFit: false },
    { title: "UI/UX Designer", company: "CreativeSolutions", location: "New York, NY", type: "Remote", from: "Design Digest", bestFit: false },
    { title: "Senior Product Designer", company: "InnovateTech", location: "Remote", type: "Part-time", from: "Tech Insider", bestFit: true },
  ]

  const sources = [
    { name: "Email Newsletters", count: 12, icon: Mail },
    { name: "Job Alerts", count: 3, icon: Bell },
  ]

  const preferences = [
    { label: "Remote", type: "location" },
    { label: "Part-Time", type: "type" },
    { label: "UX Design", type: "role" },
    { label: "United States", type: "location" },
  ]

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="px-4 sm:px-0">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8">Dashboard</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Jobs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">75</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Saved</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">56</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Applied</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">23</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-[1fr,300px] gap-6 mb-8">
          {/* Sources Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">My Sources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {sources.map((source) => (
                  <div key={source.name} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-md bg-indigo-100 text-indigo-600">
                        <source.icon className="h-4 w-4" />
                      </div>
                      <span className="font-medium text-sm">{source.name}</span>
                    </div>
                    <Badge variant="secondary" className="bg-indigo-50 text-indigo-600 hover:bg-indigo-100">
                      {source.count}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Preferences Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">My Preferences</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {preferences.map((pref) => (
                  <Badge 
                    key={pref.label} 
                    variant="secondary" 
                    className={`
                      ${pref.type === 'location' ? 'bg-blue-50 text-blue-600 hover:bg-blue-100' : ''}
                      ${pref.type === 'type' ? 'bg-green-50 text-green-600 hover:bg-green-100' : ''}
                      ${pref.type === 'role' ? 'bg-purple-50 text-purple-600 hover:bg-purple-100' : ''}
                    `}
                  >
                    {pref.label}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                Jobs from My Inbox
              </h3>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full sm:w-auto">
                <div className="relative w-full sm:w-64">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input className="pl-10 w-full" placeholder="Search jobs..." />
                </div>
                <Button variant="outline" className="w-full sm:w-auto">
                  <Filter className="mr-2 h-4 w-4" /> Filter
                </Button>
              </div>
            </div>
          </div>
          <ul className="divide-y divide-gray-200">
            {jobListings.map((job, index) => (
              <li key={index} className={`hover:bg-gray-50 transition-colors duration-150 ease-in-out ${job.bestFit ? 'bg-green-50' : ''}`}>
                <div className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex-1 min-w-0 mb-4 sm:mb-0">
                      <div className="flex items-center mb-2">
                        <h4 className="text-lg font-medium text-indigo-600 truncate group">
                          {job.title}
                          <ArrowUpRight className="inline-block ml-1 h-4 w-4 text-gray-400 group-hover:text-indigo-600" />
                        </h4>
                        {job.bestFit && (
                          <Badge variant="secondary" className="ml-2 bg-green-100 text-green-800">
                            Best Fit
                          </Badge>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center text-sm text-gray-500 space-x-4 mb-2">
                        <p>{job.company}</p>
                        <Badge variant="secondary" className="text-xs">
                          {job.type}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {job.location}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-500">{job.from}</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <BookmarkPlus className="mr-2 h-4 w-4" />
                        Save
                      </Button>
                      <Button variant="outline" size="sm">
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Applied
                      </Button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

