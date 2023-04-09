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

export async function POST(request: NextRequest) {
  console.log("POST REQUEST MADE");

  const data = await request.json();
  console.log("Form Data recieved to Update", data);

  const result = await db
    .updateTable("super_devs")
    .set({
      full_name: data.full_name,
      username: data.username,
      email: data.email,
      password: data.password,
      profile_picture: data.profile_picture,
      professional_title: data.professional_title,
      availability_status: data.availability_status,
      certifications: data.certifications,
      education: data.education,
      github_profile: data.github_profile,
      linkedin_profile: data.linkedin_profile,
      location: data.location,
      phone_number: data.phone_number,
      work_experience: data.work_experience,
      personal_website: data.personal_website,
      preferred_work_types: data.preferred_work_types,
      projects: data.projects,
      resume: data.resume,
      social_media_links: data.social_media_links,
      summary: data.summary,
      technical_skills: data.technical_skills,
    })
    .where("id", "=", data.id) // Update only the specific user
    .returning("super_devs.id")
    .execute();

  if (result.length > 0) {
    console.log("backend result", result);
  }

  console.log("backend result", result);

  return new NextResponse(JSON.stringify(result));
}
