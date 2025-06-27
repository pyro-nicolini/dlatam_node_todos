import { existsSync } from "node:fs";
import { readFile, writeFile } from "node:fs/promises";

export const getTodos = async () => {
  if (!existsSync("todos.json")) {
    await writeFile("todos.json", JSON.stringify([]));
    return [];
  } else {
    const data = await readFile("todos.json", "utf-8");
    return JSON.parse(data);
  }
};

export const saveTodos = async (todos) => {
  await writeFile("todos.json", JSON.stringify(todos));
};
