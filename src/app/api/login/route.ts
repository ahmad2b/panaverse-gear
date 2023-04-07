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
  password_hash: string;
}

interface Database {
  panaverse_developers: panaverse_developers;
}

export async function POST(
  request: NextRequest
  // params: { params: { id: number } }
) {
  // const id = params.params.id;
  const data = await request.json();

  const { username, password } = data;

  console.log(`FROM API ROUTE username: ${username}, password: ${password}`);

  const db = new Kysely<Database>({
    dialect: new PostgresDialect({
      pool: new Pool({
        ssl: true,
        connectionString: process.env.NEON_DATABASE_URL!,
      }),
    }),
  });

  // const result = await db.selectFrom("user_details").selectAll().execute();

  const result2 = await db
    .selectFrom("panaverse_developers")
    .selectAll()
    .where("name", "=", username)
    .where("password_hash", "=", password)
    .limit(1)
    .execute();

  console.log("backend result", JSON.stringify(result2));
  return new NextResponse(JSON.stringify(result2));
}
