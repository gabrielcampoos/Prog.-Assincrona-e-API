import express, { Request, Response } from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(8080, () => console.log("Servidor iniciado."));

let contador = 0;

app.get("/contador", (request: Request, response: Response) => {
  contador++;

  if (contador > 10) {
    contador = 0;
  }

  return response.send({
    contador,
    message: contador === 10 ? "O contador chegou a 10." : undefined,
  });
});
