import express, { Request, Response } from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(8080, () => console.log("Servidor iniciado."));

app.get("/inverter-string", (request: Request, response: Response) => {
  const valor: any = request.query.valor;

  const inverter = valor.split("").reverse().join("");

  return response.send({
    valorInvertido: inverter,
  });
});
