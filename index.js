
require("dotenv").config();
const express = require("express");
const dbConexion = require("./database/config");
const cors = require("cors");

dbConexion()
const app = express();

app.use(cors())
app.use(express.json())
app.use("/api/restaurantes", require("./routes/restaurantes"))

app.listen(process.env.PORT,() =>{
    console.log(`App escuchando http://localhost:${process.env.PORT}`);
})