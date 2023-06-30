import express, { Request, Response } from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(8080, () => console.log("Servidor iniciado."));

app.get("/remover-vogais", (request: Request, response: Response) => {
  const array = [];
  const valor: any = request.query.valor;
  array.push(valor.replace(/[aeiouà-ú]/gi, ""));

  return response.send({
    Nomes: array,
  });
});
