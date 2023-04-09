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

import { SuperDevs, ApprovalStatus } from "@/Types";

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

export async function POST(request: NextRequest) {
  const regUserData = await request.json();

  console.log("POST REQUEST MADE FOR REGISTERATION");

  console.log("DATA RECIVED FROM FORMS", regUserData);

  const result = await db
    .insertInto("super_devs")
    .values({
      full_name: regUserData.full_name,
      username: regUserData.username,
      email: regUserData.email,
      password: regUserData.password,
      profile_picture: regUserData.profile_picture,
      professional_title: regUserData.professional_title,
    })
    .returning(["id"])
    .execute();

  if (result.length > 0) {
    console.log("backend result", result);
  }

  console.log("backend result", result);

  return new NextResponse(JSON.stringify(result));
}
