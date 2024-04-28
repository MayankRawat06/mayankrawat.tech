import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { message } = await req.json();

  try {
    await sql`INSERT INTO messages(message) VALUES (${message});`;
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "An error occured "})
  }

  return NextResponse.json({});
}