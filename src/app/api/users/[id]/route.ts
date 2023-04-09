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

enum ApprovalStatus {
  Pending = "pending",
  Approved = "approved",
  Rejected = "rejected",
}

interface users {
  id?: number;
  username: string;
  email: string;
  password: string;
  profile_picture?: string;
  skills?: string[];
  projects?: string[];
  awards?: string[];
  social_media_links?: string[];
  approval_status: ApprovalStatus;
  role_id: number;
}

interface Role {
  id: number;
  name: string; // Developer or Moderator
}

interface Database {
  users: users;
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
  //   const status = (await request.json()) as ApprovalStatus;
  const { approval_status } = await request.json();
  console.log("PUT REQUEST MADE");
  console.log("userId", userId);
  console.log("Approval Status", approval_status);

  const result = await db
    .updateTable("users")
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
