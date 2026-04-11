import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public", "resume.pdf")

    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: "Resume file not found" },
        { status: 404 }
      )
    }

    const fileContent = fs.readFileSync(filePath)

    return new NextResponse(fileContent, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="resume.pdf"',
        "Content-Length": fileContent.length.toString(),
      },
    })
  } catch (error) {
    console.error("Error downloading resume:", error)
    return NextResponse.json(
      { error: "Failed to download resume" },
      { status: 500 }
    )
  }
}
