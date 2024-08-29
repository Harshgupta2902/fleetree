import { sql } from "@vercel/postgres";

export default async function handler(req, res) {
  try {
    const { page = 1 } = req.query;
    const pageNumber = parseInt(page, 10);
    if (isNaN(pageNumber) || pageNumber < 1) {
      return res.status(400).json({ error: "Invalid page parameter" });
    }

    const pageSize = 20;
    const offset = (pageNumber - 1) * pageSize;

    const result = await sql`
       SELECT * FROM packages
       LIMIT ${pageSize} OFFSET ${offset};
     `;

    res.status(200).json({ result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching data" });
  }
}
