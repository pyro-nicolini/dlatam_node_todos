import pkg from "pg";
const { Pool } = pkg;

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "db_app_todo",
  password: "1234",
  port: 5432,
  allowExitOnIdle: true,
});

try {
  await pool.query("SELECT NOW()");
  console.log("Database connected");
} catch (error) {
  console.log(error);
}
