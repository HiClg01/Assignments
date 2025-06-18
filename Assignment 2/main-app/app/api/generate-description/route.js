import { NextResponse } from "next/server";
import { generateGeminiDescription } from "@/lib/gemini";

export async function POST(req) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json({ error: "Prompt required" }, { status: 400 });
    }

    const description = await generateGeminiDescription(prompt);
    return NextResponse.json({ description });
  } catch (error) {
    console.error("API Error:", error.message);
    return NextResponse.json({ error: "❌ Failed to generate description" }, { status: 500 });
  }
}
