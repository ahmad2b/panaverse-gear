import { NextRequest, NextResponse } from "next/server";

import { Pool } from "pg";

import {
  Kysely,
  PostgresDialect,
  Generated,
  ColumnType,
  Selectable,
  Insertable,
  Updateable,
} from "kysely";

import { SuperDevs } from "@/Types";

interface Database {
  super_devs: SuperDevs;
}

const db = new Kysely<Database>({
  dialect: new PostgresDialect({
    pool: new Pool({
      ssl: true,
      connectionString: process.env.NEON_DATABASE_URL!,
    }),
  }),
});

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const userId = parseInt(params.id);
  const { approval_status } = await request.json();
  console.log("PUT REQUEST MADE");
  console.log("userId", userId);
  console.log("Approval Status", approval_status);

  const result = await db
    .updateTable("super_devs")
    .set({ approval_status })
    .where("id", "=", userId)
    .returning("id")
    .execute();

  if (result.length > 0) {
    console.log("backend result", result);
  }

  console.log("backend result", result);

  return new NextResponse(JSON.stringify(result));
}
