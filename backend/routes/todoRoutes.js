import express from "express";
import {
  listTodos,
  getTodo,
  createTodo,
  toggleTodo,
  deleteTodo,
} from "../controllers/todoControllers.js";

const router = express.Router();

router.get("/", listTodos);
router.get("/:id", getTodo);
router.post("/", createTodo);
router.put("/:id", toggleTodo);
router.delete("/:id", deleteTodo);

export default router;

