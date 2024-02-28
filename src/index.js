require("dotenv").config();
const express = require("express");
const knex = require("./conexao");

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const agenda = await knex('agenda');
  } catch (error) {
    return res.status(400).json({ mensagem: "Erro inesperado do servidor" });
  }
  return res.json("Até aqui tudo bem Usando o Cyclic!");
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor em pé na porta ${process.env.PORT}`);
});
