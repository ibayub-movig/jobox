'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { joinWaitlist } from "../actions/waitlist"

export default function CTA() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const result = await joinWaitlist(email)
    if (result.success) {
      setMessage("Thank you for joining our waitlist!")
      setEmail("")
    } else {
      setMessage(`There was an error. Please try again. ${result.error ? `Error: ${result.error}` : ''}`)
    }
  }

  return (
    <div className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-800">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-heading">
            Transform your inbox into your personal job board
          </h2>
          <form onSubmit={handleSubmit} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="max-w-xs w-full bg-white"
            />
            <Button 
              type="submit" 
              size="lg" 
              className="bg-white text-indigo-600 hover:bg-white/90 font-heading font-semibold text-lg w-full sm:w-auto"
            >
              Join Waitlist
            </Button>
          </form>
          {message && (
            <p className="mt-4 text-white">{message}</p>
          )}
        </div>
      </div>
    </div>
  )
}

