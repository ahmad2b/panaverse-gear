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

interface panaverse_developers {
  id: Generated<number>;
  name: string;
  email: string;
  password_hash: string;
  public_name: string;
  public_email: string;
  bio: string;
  profile_picture: string;
  is_email_public: boolean;
  is_name_public: boolean;
  created_at: Date;
  updated_at: Date;
}

interface Database {
  panaverse_developers: panaverse_developers;
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
  console.log("POST REQUEST MADE");

  const data = await request.json();
  const result = await db
    .insertInto("panaverse_developers")
    .values({
      //   id: 1000,
      name: data.name,
      email: data.email,
      password_hash: data.password,
      public_name: data.public_name,
      public_email: data.public_email,
      bio: data.bio,
      profile_picture: data.profile_pic,
      is_email_public: data.is_email_public,
      is_name_public: data.is_name_public,
      created_at: new Date(),
      updated_at: new Date(),
    })
    .returning("id")
    .execute();

  if (result.length > 0) {
    console.log("backend result", result);
  }

  console.log("backend result", result);

  return new NextResponse(JSON.stringify(result));
}
