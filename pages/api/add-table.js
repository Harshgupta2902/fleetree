import { sql } from "@vercel/postgres";

export default async function handler(request, response) {
  try {
    const result = await sql`CREATE TABLE packages (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      link TEXT NOT NULL,
      description TEXT,
      version TEXT,
      published_ago TEXT,
      publisher TEXT,
      license TEXT,
      compatibility TEXT,
      scores JSONB,
      pub_tag_badges JSONB
    );`;
    return response.status(200).json({ result });
  } catch (error) {
    return response.status(500).json({ error });
  }
}
