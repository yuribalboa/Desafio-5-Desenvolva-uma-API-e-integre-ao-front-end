import express from "express";
import cors from "cors";
import sqlite3 from "sqlite3";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Conectar ao banco de dados SQLite
const db = new sqlite3.Database("./catalogo_livros.db");

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS catalogo_livros (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      id2 TEXT,
      titulo TEXT,
      num_paginas TEXT,
      isbn TEXT,
      editora TEXT
    )
  `);
});

// Listar todos os livros
app.get("/livros", (req, res) => {
  db.all("SELECT * FROM catalogo_livros", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Buscar um livro por ID
app.get("/livros/:id", (req, res) => {
  db.get("SELECT * FROM catalogo_livros WHERE id = ?", [req.params.id], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(row);
  });
});

// Criar um novo livro
app.post("/livros", (req, res) => {
  const { id, titulo, num_paginas, isbn, editora } = req.body
  db.run("INSERT INTO catalogo_livros (id2, titulo, num_paginas, isbn, editora) VALUES (?, ?, ?, ?, ?)", [id, titulo, num_paginas, isbn, editora]);
  return res.status(201).json({ id, titulo, num_paginas, isbn, editora });
});

// Atualizar um livro
app.put("/livros/edicao/:id", (req, res) => {
  const { titulo, num_paginas, isbn, editora } = req.body;
  console.log(titulo, num_paginas, isbn, editora)
  db.run("UPDATE catalogo_livros SET titulo = ?, num_paginas = ?, isbn = ?, editora = ? WHERE id = ?", [titulo, num_paginas, isbn, editora, req.params.id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Livro atualizado com sucesso!" });
  });
});

// Deletar um livro
app.delete("/livros/:id", (req, res) => {
  db.run("DELETE FROM catalogo_livros WHERE id = ?", [req.params.id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Livro deletado com sucesso!" });
  });
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});