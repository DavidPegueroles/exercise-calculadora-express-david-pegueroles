const express = require("express");
const router = express.Router();

router.get("/sum", (req, res) => {
  let { a, b } = req.query;

  a = +a;
  b = +b;

  res.status(200);
  res.json({ sum: `${a} + ${b} = ${a + b}` });
});

router.get("/rest", (req, res) => {
  let { a, b } = req.query;

  a = +a;
  b = +b;

  res.status(200);
  res.json({ rest: `${a} - ${b} = ${a - b}` });
});

router.get("/multiply", (req, res) => {
  let { a, b } = req.query;

  a = +a;
  b = +b;

  res.status(200);
  res.json({ multiply: `${a} * ${b} = ${a * b}` });
});

router.get("/divide", (req, res) => {
  let { a, b } = req.query;

  a = +a;
  b = +b;

  res.status(200);
  res.json({ divide: `${a} / ${b} = ${a / b}` });
});

module.exports = router;
