# Simon Lee — Developer Portfolio

A personal portfolio and online resume built with Next.js, React, TypeScript, and Tailwind CSS. It presents Simon's background, skills, projects, and contact information, with a downloadable resume.

## Features

- Responsive portfolio pages for Home, About, Projects, Skills, and Contact.
- Dark/light theme support.
- Project cards with links to live demos and source repositories where available.
- Resume download served as a PDF attachment.

## Tech stack

- Next.js 16 (App Router) and React 19
- TypeScript
- Tailwind CSS 4
- Radix UI and shadcn-style UI components

## Getting started

### Requirements

- Node.js 20.9 or later
- pnpm

### Install and run locally

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the local development server with Turbopack. |
| `pnpm build` | Create a production build. |
| `pnpm start` | Run the production server. |
| `pnpm lint` | Run ESLint. |
| `pnpm typecheck` | Run the TypeScript compiler without emitting files. |
| `pnpm format` | Format TypeScript and TSX files with Prettier. |

## Resume PDF

The downloadable resume is `public/resume.pdf`. Replace that file with the updated PDF to update the download. The navbar and home page download controls use the `/api/download-resume` endpoint.

## Project structure

```text
app/                  App Router pages and server actions
	about/              About page
	actions/             Server actions
	api/                API routes, including resume download
	contact/            Contact page
	projects/           Featured projects
	resume/             Resume page
	skills/             Skills page
components/           Shared navigation, UI, and chatbot components
public/               Static assets and downloadable resume PDF
```

## Deployment

Deploy as a Next.js application (for example, on Vercel). Keep the resume PDF at `public/resume.pdf` so the download endpoint can serve it.
