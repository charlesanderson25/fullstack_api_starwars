import express from "express";
import axios from "axios";
import api from "./api.mjs";
import client from "./redisDB.mjs";

const app = express();

const PORT = 3000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT} `);
});

app.get("/people/:id", async (req, res) => {
  const { people, id } = req.params;

  try {
    const retornoAPI = await api.get(`/${people}/${id}`);
    res.status(200).send(retornoAPI.data);
  } catch (error) {
    res.status(404).send(`
        <html>
          <body>
            <h1>Deu erro, Jovem!</h1>
          </body>
        </html>
      `);
  }
  res.status(404).send(`
      <html>
        <body>
          <h1>Rota não encontrada</h1>
        </body>
      </html>
    `);
});

app.get("/people/search/:searchPeople", async (req, res) => {
  const searchPeople = req.params.searchPeople;
  console.log(searchPeople);
  try {
    const testSearch = `/people?search=${searchPeople}`;
    const response = await api.get(testSearch);
    res.status(200).send(response.data);
  } catch (error) {
    res.status(500).send("Erro na busca dos dados!");
  }
});
