const debug = require("debug")("calculator:server");
const express = require("express");

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

module.exports = initializeServer;
