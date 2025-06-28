import { pool } from "../database/connection.js";

const findAll = async () => {
  const { rows } = await pool.query("SELECT * FROM todos ORDER BY id ASC");
  return rows;
};

const findById = async (id) => {
  const { rows } = await pool.query("SELECT * FROM todos WHERE id = $1", [id]);
  return rows[0];
};

const create = async (title) => {
  const { rows } = await pool.query("INSERT INTO todos (title, done) VALUES ($1, $2) RETURNING *", [title, false]);
  return rows[0];
};

const toggle = async (id) => {
  const { rows } = await pool.query(
    "UPDATE todos SET done = NOT done WHERE id = $1 RETURNING *",
    [id]
  );
  return rows[0];
};

const remove = async (id) => {
  const { rows } = await pool.query("DELETE FROM todos WHERE id = $1 RETURNING *", [id]);
  return rows[0];
};

export const todoModel = {
  findAll,
  findById,
  create,
  toggle,
  remove,
};