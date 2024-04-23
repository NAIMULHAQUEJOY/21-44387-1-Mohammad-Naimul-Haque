import { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../_lib/db';

export async function POST(request: NextApiRequest, response: NextApiResponse) {
  const { employer_name, company_name, contact_no, username, password } = await request.json();
  if (!employer_name || !company_name || !contact_no || !username || !password) {
    return response.status(400).json({ error: 'All fields are required' });
  }
  
  // Logic to register a new employer
  try {
    const result = await pool.query(
      'INSERT INTO employers (employer_name, company_name, contact_no, username, password) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [employer_name, company_name, contact_no, username, password]
    );
    
    return response.status(200).json(result.rows[0]);
  } catch (error) {
    // Handle database errors, like duplicate username, etc.
    return response.status(500).json({ error: 'Internal Server Error' });
  }
}
