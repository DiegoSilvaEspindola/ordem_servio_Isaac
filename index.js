const express = require("express");

const app = express();

app.use(express.json());

let ordemServicos = [];

//lançando o.s

app.post("/ordemServicos", (req, res) => {
  const { id, cliente, maquina, operador } = req.body;
  const os = { id, cliente, maquina, operador };
  ordemServicos.push(os);
  res.status(201).json(os);
});

//pegando a lista de o.s
app.get("/ordemServicos", (req, res) => {
  res.status(200).json(ordemServicos);
});

//buscando o.s por id
app.get("/ordemServicos/:id", (req, res) => {
  const { id } = req.params;
  const osId = ordemServicos.find((os) => os.id == id);
  res.status(200).json(osId);
});

app.listen(3333);
