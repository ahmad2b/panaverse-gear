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

interface users {
  id: Generated<number>;
  username: string;
  password: string;
  role_id: number;
}

interface Database {
  super_devs: users;
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

  const result = await db
    .selectFrom("super_devs")
    .selectAll()
    .where("username", "=", username)
    .where("password", "=", password)
    .limit(1)
    .execute();

  if (result) {
    console.log("USER REGISTERED SUCCESSFULLY");
    const sessionToken = `${result[0].id}:${result[0].role_id}}`;

    console.log("backend result", JSON.stringify(result));
    return new NextResponse(JSON.stringify([result, { sessionToken }]));
  } else {
    console.log("USER NOT REGISTERED");
    return new NextResponse(JSON.stringify({ sessionToken: null }));
  }
}
