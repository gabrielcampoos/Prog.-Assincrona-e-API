import express, { Request, Response } from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(8080, () => console.log("Servidor iniciado."));

app.get("/calculadora", (request: Request, response: Response) => {
  const { operacao, valorA, valorB } = request.query;

  let retornoCalculadora;

  switch (operacao) {
    case "somar":
      retornoCalculadora = Number(valorA) + Number(valorB);
      break;

    case "subtrair":
      retornoCalculadora = Number(valorA) - Number(valorB);
      break;

    case "multiplicar":
      retornoCalculadora = Number(valorA) * Number(valorB);
      break;

    case "dividir":
      if (Number(valorB) === 0) {
        retornoCalculadora = "Impossível dividir por zero.";
        break;
      }
      retornoCalculadora = Number(valorA) / Number(valorB);
      break;

    default:
      break;
  }

  return response.send({ retornoCalculadora });
});
