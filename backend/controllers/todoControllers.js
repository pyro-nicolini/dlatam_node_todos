import { getTodos, saveTodos } from "../models/todoModels.js";
import {nanoid} from "nanoid";

export const listTodos = async( req, res) => {
    const todos = await getTodos();
    res.json(todos)
}


export const getTodo = async (req, res) => {
    const { id } = req.params;
    const todos = await getTodos();
    const todo = todos.find(t=> t.id === id);
    if(!todo) return res.status(404).json({ message: "Todo not found" })
    res.json(todo);
}



export const createTodo = async(req, res)=> {
    const { title } = req.body;
    const newTodo = { id: nanoid(), title, done: false };
    const todos = await getTodos();
    todos.push(newTodo);
    await saveTodos(todos);
    res.status(201).json(newTodo);
}

export const toggleTodo = async(req,res)=> {
    const { id } = req.params;
    const todos = await getTodos();
    const index = todos.findIndex((t)=> t.id === id);
    if (index === -1) return res.status(404).json({message: "Todo not found"});
    todos[index].done = !todos[index].done;
    await saveTodos(todos);
    res.json(todos[index])
}

export const deleteTodo = async(req,res)=> {
    const { id} = req.params;
    const todos = await getTodos();
    const todosFiltrados = todos.filter((t)=> t.id !== id);

    if (todos.length === todosFiltrados.length) return res.status(404).json({message: "Todo not found"});
    await saveTodos(todosFiltrados);
    res.json(todosFiltrados);
}


export default {
  listTodos,
  getTodo,
  createTodo,
  toggleTodo,
  deleteTodo
};