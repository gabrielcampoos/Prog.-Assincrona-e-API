import express, { Request, Response } from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(8080, () => console.log("Servidor iniciado."));

app.get("/numeral", (request: Request, response: Response) => {
  const operacao = request.query.operacao;
  let valor = Number(request.query.valor);

  if (operacao === "anterior") {
    valor -= 1;
  } else if (operacao === "proximo") {
    valor += 1;
  }

  return response.send({
    resultado: valor,
  });
});
