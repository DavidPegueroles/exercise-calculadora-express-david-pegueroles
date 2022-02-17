require("dotenv").config();
const debug = require("debug")("calculator:root");
const initializeServer = require("./server");

const port = process.env.SERVER_PORT || 5173;

(async () => {
  try {
    await initializeServer(port);
  } catch (error) {
    debug(error.message);
  }
})();
