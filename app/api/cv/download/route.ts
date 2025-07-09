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

      // Read and serve the fallback CV for download
      const fallbackFile = fs.readFileSync(fallbackPath);
      return new NextResponse(fallbackFile, {
        headers: {
          "Content-Type": "application/pdf",
          "Content-Disposition": `attachment; filename="Ho_Bao_Lan_Resume_${validLocale.toUpperCase()}.pdf"`,
          "Cache-Control": "public, max-age=3600" // Cache for 1 hour
        }
      });
    }

    // Read and serve the CV for download
    const cvFile = fs.readFileSync(cvPath);
    return new NextResponse(cvFile, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="Ho_Bao_Lan_Resume_${validLocale.toUpperCase()}.pdf"`,
        "Cache-Control": "public, max-age=3600" // Cache for 1 hour
      }
    });
  } catch (error) {
    console.error("Error serving CV download:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
