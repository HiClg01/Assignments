import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    const newMsg = await prisma.msg.create({
      data: { name, email, message },
    });

    return NextResponse.json({ success: true, msg: newMsg }, { status: 201 });
  } catch (error) {
    console.error("Error saving message:", error);
    return NextResponse.json({ success: false, error: "Server Error" }, { status: 500 });
  }
}
