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

app.get("/:people/:id", async (req, res) => {
  const { people, id } = req.params;

  try {
    const retornoAPI = await api.get(`/${people}/${id}`);
    const retornoData = `
    Nome ${data.name}
    `;
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
  //   res.send(`
  //     <html>
  //       <body>
  //         <h1>Você acessou o projeto!</h1>
  //       </body>
  //     </html>
  //   `);
});
