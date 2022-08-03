const express = require("express");
const app = express();
const pool = require("./db");
const cors = require("cors")

app.use(express.json()) // req.body
app.use(cors)

app.get("/tarefas", async(req, res) => {
    try {
        const allTodos = await pool.query("SELECT descricao FROM todo");
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.get("/tarefas/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const idTodo = await pool.query(
            "SELECT * FROM todo WHERE id_todo = $1",
            [id]
        );
        res.json(idTodo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

app.post("/tarefas", async(req, res) => {
    try {
        const {descricao} = req.body;
        const newTodo = await pool.query(
            "INSERT INTO todo (descricao) VALUES ($1) RETURNING *",
            [descricao]
        );
        res.json(newTodo.rows[0])
    } catch (err) {
        console.error(err.message);
    }
});

app.put("/tarefas/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const {descricao} = req.body;
        const updateTodo = await pool.query(
            "UPDATE todo SET descricao = $1 WHERE id_todo = $2",
            [descricao, id]
        );
        res.json("Tarefa atualizada!");
    } catch (err) {
        console.error(err.message);
    }
});

app.delete("/tarefas/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const deleteTodo = await pool.query(
            "DELETE FROM todo WHERE id_todo = $1",
            [id]
        );
        res.json("Tarefa deletada!");
    } catch (err) {
        console.error(err.message);
    }
});

app.listen(5000, () => {
    console.log("server on B)")
});