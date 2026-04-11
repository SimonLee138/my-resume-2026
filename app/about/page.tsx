import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Page() {
  return (
    <div className="min-h-full px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm tracking-[0.24em] text-muted-foreground uppercase">
            About me
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Who I am
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground sm:text-lg">
            A quick introduction to my work, experience, and the projects that
            define my skillset.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <Card className="h-full shadow-lg">
            <CardContent className="space-y-6 text-sm leading-relaxed">
              <p>
                I build modern web experiences with AI-enhanced workflows,
                responsive design, and clean user interactions.
              </p>
              <div className="flex flex-col gap-4">
                <div className="rounded-3xl border border-border bg-background p-6">
                  <h2 className="mb-3 text-lg font-semibold">What I do</h2>
                  <p className="text-muted-foreground">
                    Creating polished interfaces, intelligent tools, and
                    performance-conscious applications using the latest web
                    technologies.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-slate-200 px-4 py-3 text-[14px] dark:bg-slate-800">
                    Learning AI
                  </Badge>
                  <Badge className="bg-slate-200 px-4 py-3 text-[14px] dark:bg-slate-800">
                    Being a better full-stack developer
                  </Badge>
                  <Badge className="bg-slate-200 px-4 py-3 text-[14px] dark:bg-slate-800">
                    Open to opportunities
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="h-full shadow-lg">
            <CardContent className="flex h-full items-center justify-center rounded-3xl bg-slate-100 dark:bg-slate-900">
              <p className="text-lg font-medium text-muted-foreground">Photo</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
