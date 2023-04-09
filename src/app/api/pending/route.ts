import { NextRequest, NextResponse } from "next/server";
import postgres from "postgres";

export async function GET(request: NextRequest) {
  const conn = postgres({
    ssl: require,
  });
  const result = await conn.unsafe(
    "SELECT * FROM super_devs WHERE approval_status = 'pending'"
  );
  console.log("backend result", result);
  return new NextResponse(JSON.stringify(result));
}
