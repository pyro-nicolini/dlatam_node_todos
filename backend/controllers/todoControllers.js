import { todoModel } from "../models/todo.Models.js";

export const listTodos = async (req, res) => {
  try {
    const todos = await todoModel.findAll();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los todos" });
  }
};

export const getTodo = async (req, res) => {
  const { id } = req.params;
  const todo = await todoModel.findById(id);
  if (!todo) return res.status(404).json({ message: "Todo no encontrado" });
  res.json(todo);
};

export const createTodo = async (req, res) => {
  const { title } = req.body;
  const newTodo = await todoModel.create(title);
  res.status(201).json(newTodo);
};

export const toggleTodo = async (req, res) => {
  const { id } = req.params;
  const updated = await todoModel.toggle(id);
  if (!updated) return res.status(404).json({ message: "Todo no encontrado" });
  res.json(updated);
};

export const deleteTodo = async (req, res) => {
  const { id } = req.params;
  const deleted = await todoModel.remove(id);
  if (!deleted) return res.status(404).json({ message: "Todo no encontrado" });
  res.json(deleted);
};
