import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import todoRoutes from "./routes/todoRoutes.js";

const app = express();

app.use(bodyParser.json());
app.use(cors())


app.use("/todos", todoRoutes);


app.get("/", (req, res) => {
  res.send("API de TODOs funcionando correctamente 🚀 en el 4000");
});


app.listen(4000, ()=>{
    console.log('Servidor corriendo en el puerto 4000')
})