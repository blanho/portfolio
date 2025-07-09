import { NextRequest, NextResponse } from "next/server";
import { locales, type Locale } from "@/i18n/config";
import fs from "fs";
import path from "path";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const locale = searchParams.get("locale") || "en";

    // Validate locale
    const validLocale = locales.includes(locale as Locale) ? locale : "en";

    // Path to the CV file
    const cvPath = path.join(
      process.cwd(),
      "public",
      "cv",
      `resume-${validLocale}.pdf`
    );

    // Check if the CV file exists
    if (!fs.existsSync(cvPath)) {
      // Fallback to English if the specific locale doesn't exist
      const fallbackPath = path.join(
        process.cwd(),
        "public",
        "cv",
        "resume-en.pdf"
      );
      if (!fs.existsSync(fallbackPath)) {
        return NextResponse.json({ error: "CV not found" }, { status: 404 });
      }

      // Read and serve the fallback CV
      const fallbackFile = fs.readFileSync(fallbackPath);
      return new NextResponse(fallbackFile, {
        headers: {
          "Content-Type": "application/pdf",
          "Content-Disposition": `inline; filename="resume-${validLocale}.pdf"`,
          "Cache-Control": "public, max-age=3600" // Cache for 1 hour
        }
      });
    }

    // Read and serve the CV
    const cvFile = fs.readFileSync(cvPath);
    return new NextResponse(cvFile, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="resume-${validLocale}.pdf"`,
        "Cache-Control": "public, max-age=3600" // Cache for 1 hour
      }
    });
  } catch (error) {
    console.error("Error serving CV:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { locale } = await request.json();

    // Validate locale
    const validLocale = locales.includes(locale as Locale) ? locale : "en";

    // Return the CV path information
    return NextResponse.json({
      locale: validLocale,
      cvPath: `/api/cv?locale=${validLocale}`,
      downloadPath: `/api/cv/download?locale=${validLocale}`
    });
  } catch (error) {
    console.error("Error processing CV request:", error);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
