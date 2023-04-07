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
  console.log("Form Data recieved to Update", data);

  const result = await db
    .updateTable("panaverse_developers")
    .set({
      name: data.editedName,
      email: data.editedEmail,
      public_name: data.editedPublicName,
      public_email: data.editedPublicEmail,
      bio: data.editedBio,
      is_email_public: data.editedIsEmailPublic,
      is_name_public: data.editedIsNamePublic,
      updated_at: new Date(),
    })
    .where("id", "=", data.id) // Update only the specific user
    .returning("panaverse_developers.id")
    .execute();

  if (result.length > 0) {
    console.log("backend result", result);
  }

  console.log("backend result", result);

  return new NextResponse(JSON.stringify(result));
}
