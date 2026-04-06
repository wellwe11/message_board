import pool from "./pool.js";

// GET
export const getAllMessages = async () => {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
};

// GET
export const findMessage = async (id) => {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = ($1)", [
    id,
  ]);

  return rows[0];
};

// POST
export const insertMessage = async (message, username, date) => {
  await pool.query(
    "INSERT INTO messages (message, username, added) VALUES ($1, $2, $3)",
    [message, username, date],
  );
};
