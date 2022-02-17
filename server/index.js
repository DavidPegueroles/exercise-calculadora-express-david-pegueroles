const debug = require("debug")("calculator:server");
const express = require("express");
const morgan = require("morgan");
const router = require("./routes/operations");

const app = express();

const initializeServer = (port) => {
  new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      debug(`Server is ready at http://localhost:${port}/calculator`);
      resolve();
    });

    server.on("error", (error) => {
      reject(`Error on server: ${error.message}`);
    });
  });
};

app.use(morgan("dev"));

app.use((req, res, next) => {
  debug(`A request has arrived to ${req.url}`);
  next();
});

app.use("/calculator", router);

app.use((req, res) => {
  res.status(404);
  res.json({ error: true, message: "No sé què busques però aquí no és" });
});

app.use((req, res) => {
  debug("Todo me male sal");
  res.status(500);
  res.json({ error: true, message: "Todo me male sal" });
});

module.exports = initializeServer;
