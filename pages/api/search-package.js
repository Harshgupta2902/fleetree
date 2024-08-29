import { sql } from "@vercel/postgres";

export default async function handler(req, res) {
  try {
    const { search = "" } = req.query;

    const searchTerm = `%${search.replace(/%/g, "\\%").replace(/_/g, "\\_")}%`;

    const result = await sql`
      SELECT * FROM packages
      WHERE name ILIKE ${searchTerm}
        ORDER BY (scores->>'popularity')::int DESC,
                (scores->>'pubPoints')::int DESC,
                (scores->>'likes')::int DESC

      ;
    `;

    res.status(200).json({ result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching data" });
  }
}
