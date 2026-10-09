import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.redirect(
    "https://drive.google.com/file/d/18bZyotOCpwhg6PsdgQC0HFHsTPLvGDh0/view?usp=sharing",
    307
  );
}
