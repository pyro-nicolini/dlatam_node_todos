import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import todoRoutes from "./routes/todoRoutes.js";

const app = express();
const PORT = 4000;

app.use(bodyParser.json());
app.use(cors());

app.use("/todos", todoRoutes);

app.get("/", (req, res) => {
  res.send("API de TODOs funcionando correctamente 🚀 en el 4000");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});