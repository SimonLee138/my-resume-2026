import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import { IconBrandGithub } from "@tabler/icons-react"

const projects = [
  {
    title: "Vet Map Hong Kong",
    challenge:
      "Pet owners in Hong Kong often struggle to find suitable veterinary clinics during emergencies or for exotic pets.",
    description:
      "I built Vet Map Hong Kong, a React Native (Expo) application that displays veterinary clinics on an interactive map using OpenStreetMap and Leaflet. Users can search by location, filter for 24-hour clinics, and identify clinics that handle exotic animals.",
    features: [
      "Real-time map with clinic markers",
      "Search and multi-filter system",
      "Clean mobile-first UI",
    ],
    image: "/vet-map.PNG",
    tech: ["Expo", "Leaflet", "OpenStreetMap"],
    category: "Web",
    demo: "https://vet-map-lilac.vercel.app/",
    github: "https://github.com/SimonLee138/vet-map",
  },
  {
    title: "Medication Scheduler",
    challenge:
      "Managing multiple medications with different timings is error-prone and stressful.",
    description:
      "I developed Medication Scheduler, a full-stack web app that allows users to create, view, and track their medication schedules. The system supports multiple medications, custom timings, and a clean daily/weekly view so users can quickly see what they need to take.",
    features: [
      "Create and edit medication schedules",
      "Daily and overview views",
      "Persistent data storage with PostgreSQL",
      "Responsive UI built with Tailwind CSS",
    ],
    image: "/medication-scheduler.png",
    tech: ["Next.js", "PostgreSQL", "TypeScript", "Tailwind CSS"],
    category: "Web",
    demo: "https://mug-and-pee-vercel.vercel.app/",
    github: "https://github.com/SimonLee138/mug-and-pee",
  },
]

export default function Page() {
  return (
    <div className="min-h-full px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm tracking-[0.24em] text-muted-foreground uppercase">
            Featured work
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Projects
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground sm:text-lg">
            A selection of my best projects, from AI-enhanced experiences to
            fully featured web applications.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="overflow-hidden shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-52 overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold">{project.title}</h2>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {project.challenge}
                  </p>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {project.description}
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold">Key features</h3>
                  <ul className="list-inside list-disc space-y-1 text-sm leading-6 text-muted-foreground">
                    {project.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold">Tech stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="px-3 py-1 text-xs font-medium"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
              <div className="flex flex-wrap items-center justify-between gap-3 border-t px-4 py-4 text-sm text-muted-foreground">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-3 py-2 text-primary transition hover:bg-primary/10"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-muted/50 px-3 py-2 transition hover:bg-muted"
                  >
                    <IconBrandGithub className="h-4 w-4" />
                    GitHub
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
