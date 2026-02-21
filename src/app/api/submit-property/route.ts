import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  if (!supabase) {
    return NextResponse.json(
      { error: "Database not configured" },
      { status: 503 }
    );
  }

  const body = await request.json();

  const { error } = await supabase.from("property_submissions").insert({
    first_name: body.first_name,
    last_name: body.last_name,
    phone: body.phone,
    email: body.email,
    postal_code: body.postal_code,
    property_type: body.property_type,
    timeframe: body.timeframe || null,
    consent_transactional: body.consent_transactional === "on",
    consent_terms: body.consent_terms === "on",
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
