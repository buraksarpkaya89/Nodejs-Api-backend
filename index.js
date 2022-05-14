import express from 'express';
import bodyParser from "body-parser"
import cors from "cors"

import jobRoutes from "./routes/jobs.js"

const app =express();
const port =5000;

app.use(bodyParser.json());
app.use(cors())

app.use("/", jobRoutes)

app.get("/", (req,res) => res.send("hello From Express"));
app.all("*", (req,res)=> res.send("that route doesn't exist"))

app.listen(port,() => console.log(`Server is listening on port: http://localhost:${port}`))