import express from "express";
import axios from "axios";
import api from "./api.mjs";
import client from "../redisDB.mjs";
import cors from "cors";

const app = express();

const PORT = 3001;

app.use(express.json());

app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT} `);
});

//Rota de integração
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

//Rota de pesquisa do personagem
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

//Rota para adicionar ou remover favorito
app.post("/people/favorites/:id", (req, res) => {
  const personagemId = req.params.id;

  client.sIsMember("favorites", personagemId, (err, reply) => {
    if (err) {
      res.status(500).send("Erro ao verificar favorito");
    } else {
      if (reply === 1) {
        client.sRem("favorites", personagemId, (err) => {
          if (err) {
            res.status(500).send("Erro ao remover personagem como favorito");
          } else {
            res.status(200).send("Personagem removido dos favoritos");
          }
        });
      } else {
        client.sAdd("favorites", personagemId, (err) => {
          if (err) {
            res.status(500).send("Erro ao adicionar favorito");
          } else {
            res.status(200).send("Favorito adicionado com sucesso!");
          }
        });
      }
    }
  });
});
