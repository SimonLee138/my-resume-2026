"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import AnimatedBackground from "@/components/AnimatedBackground"
import Link from "next/link"
import AIChatbot from "@/components/AIChatbot"

export default function Page() {
  const [showChatbot, setShowChatbot] = React.useState(false)

  const downloadResume = async () => {
    try {
      const response = await fetch("/api/download-resume")
      if (!response.ok) {
        throw new Error("Failed to download resume")
      }
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = "resume.pdf"
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
    } catch (error) {
      console.error("Error downloading resume:", error)
      alert("Failed to download resume. Please try again.")
    }
  }

  return (
    <div className="relative flex min-h-full items-center justify-center p-4 sm:p-6">
      <AnimatedBackground />
      <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
        <div className="space-y-6">
          {/* Hero Section */}
          <div className="space-y-4">
            <h1 className="text-2xl font-bold text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
              Hi, I'm Simon Lee
            </h1>
            <p className="text-lg text-muted-foreground sm:text-xl md:text-2xl">
              Full-Stack Developer | Building AI-powered experiences
            </p>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              A 5-year-old developer with a passion for creating innovative
              solutions. Learning AI integration with web technologies.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/projects">View My Projects</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
              onClick={() => downloadResume()}
            >
              Download My Resume
            </Button>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">
              <Link href="/contact">Let's Connect</Link>
            </Button>
          </div>

          {/* Additional Info */}
          <div className="space-y-4 pt-8">
            <p className="text-sm text-muted-foreground">
              You may use the AI Resume Assistant to help you enhance your
              resume and portfolio.
            </p>
            <Button
              className="mt-2"
              onClick={() => setShowChatbot(!showChatbot)}
            >
              AI Resume Assistant
            </Button>
            {showChatbot && <AIChatbot />}
          </div>

          {/* Dark mode hint */}
          <div className="pt-4">
            <p className="font-mono text-xs text-muted-foreground">
              (Press{" "}
              <kbd className="rounded bg-muted px-1 py-0.5 text-xs">d</kbd> to
              toggle dark mode)
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
