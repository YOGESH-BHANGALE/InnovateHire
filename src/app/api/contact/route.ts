import { NextResponse } from "next/server";

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  message?: string;
}

export async function POST(request: Request) {
  const body = (await request.json()) as ContactPayload;
  const email = body.email?.trim();
  const hasFullForm = Boolean(body.name || body.phone || body.message);

  if (!email || !email.includes("@")) {
    return NextResponse.json({ ok: false, message: "Enter a valid work email." }, { status: 400 });
  }

  if (hasFullForm && (!body.name?.trim() || !body.projectType?.trim() || !body.message?.trim())) {
    return NextResponse.json({ ok: false, message: "Add the project details so we can route your signal." }, { status: 400 });
  }

  return NextResponse.json({ ok: true, message: "Signal received / we’ll be in touch." });
}
