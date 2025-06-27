# 📋 TODO App API (Node.js + Express)

API RESTful simple para gestionar tareas (TODOs),
construida con Node.js y Express.
Utiliza un archivo `todos.json` como base de datos local para almacenar los datos de manera persistente.

---

## 🚀 Características

- Obtener todos los TODOs
- Obtener un TODO por ID
- Crear un nuevo TODO
- Alternar el estado (`done`) de un TODO
- Eliminar un TODO

---

## 🛠 Tecnologías utilizadas

- Node.js
- Express.js
- nanoid (para generar IDs únicos)
- body-parser (middleware para `req.body`)
- cors (para permitir peticiones entre dominios)
- fs/promises y fs (para manejo de archivos locales)
