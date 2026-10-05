import express from "express";
import { Pool } from "./db.js"

const app = express();

app.use(express.json());
app.use(express.static('public'));

app.get("/usuario", async (req, res) => {
    const alunos = await pool.query('SELECT*FROM usuario;');
});