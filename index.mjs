import express from "express";
import axios from "axios";
import api from "./api.mjs";
// import req from "express/lib/request";
// import res from "express/lib/response";

const app = express();

const serverPort = 80;

app.listen(80, () => {
  console.log(`Server is running on port:${serverPort} `);
});

app.get("/", async (req, res) => {
  const retornoAPI = await api.get("/people/1");
  res.send(retornoAPI.data);
  //   res.send(`
  //     <html>
  //       <body>
  //         <h1>Você acessou o projeto!</h1>
  //       </body>
  //     </html>
  //   `);
});
