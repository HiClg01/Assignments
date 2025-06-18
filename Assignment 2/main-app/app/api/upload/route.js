import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // Dummy logic — replace with your actual upload logic
    // For example, upload to Supabase, S3, or local folder

    console.log("File received:", file.name);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("❌ Upload API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
