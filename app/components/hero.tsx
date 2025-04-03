'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { joinWaitlist } from "../actions/waitlist"

export default function Hero() {
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
    <div className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-800 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl max-w-4xl mx-auto font-heading">
          Transform email chaos to your own personal job board
        </h1>
        <p className="mt-6 text-xl text-white/80 max-w-2xl mx-auto font-sans">
          Jobox helps you save time and prioritize job opportunities from your favorite newsletters and alerts
        </p>
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
            className="bg-white text-indigo-600 hover:bg-white/90 font-heading font-semibold text-lg"
          >
            Join Waitlist
          </Button>
        </form>
        {message && (
          <p className="mt-4 text-white">{message}</p>
        )}
      </div>
    </div>
  )
}

