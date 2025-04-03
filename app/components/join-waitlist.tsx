'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { joinWaitlist } from "../actions/waitlist"

export default function JoinWaitlist() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const result = await joinWaitlist(email)
    if (result.success) {
      setMessage("Thanks for joining!")
      setEmail("")
    } else {
      setMessage(`There was an error. Please try again. ${result.error ? `Error: ${result.error}` : ''}`)
    }
  }

  return (
    <div className="bg-indigo-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Control your job search
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Join the waitlist for early access!
          </p>
          <form onSubmit={handleSubmit} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="max-w-xs w-full"
            />
            <Button 
              type="submit" 
              size="lg" 
              className="bg-indigo-600 text-white hover:bg-indigo-700 font-heading font-semibold text-lg w-full sm:w-auto"
            >
              Join Waitlist
            </Button>
          </form>
          {message && (
            <p className="mt-4 text-indigo-600">{message}</p>
          )}
        </div>
      </div>
    </div>
  )
}

