require("dotenv").config();
const express = require("express");
const knex = require("./conexao");

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  try {
    //const agenda = await knex('agenda');
    const carros = ["fusca", "cadilac"];
    //return res.status(200).json({ mensagem: "teste com sucesso" });
    return res.status(200).json(carros);
  } catch (error) {
    console.log("erro aqui 2", error);
    return res.status(400).json({ mensagem: "Erro inesperado do servidor" });
  }
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor em pé na porta ${process.env.PORT}`);
});
