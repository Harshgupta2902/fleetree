import { sql } from "@vercel/postgres";


export default async function handler(req, res) {
  try {
    // Get pagination parameters from query
    const { page = 1 } = req.query;

    // Ensure the page is a number
    const pageNumber = parseInt(page, 10);

    // Validate pageNumber
    if (isNaN(pageNumber) || pageNumber < 1) {
      return res.status(400).json({ error: "Invalid page parameter" });
    }

    // Fixed limit
    const pageSize = 20;

    // Calculate offset
    const offset = (pageNumber - 1) * pageSize;

    // Query with pagination
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
