// const express = require("express");
// const i18n = require("i18n");
// const path = require("path");

// i18n.configure({
//   locales: ["en", "es"],
//   directory: __dirname + "/locales",
//   defaultLocale: "es",
//   cookie: "i18n",
// });

// const app = express();

// app.use(i18n.init);

// app.get("/", (req, res) => {
//   res.send(req.__("Hello"));
// });

// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });

import express from "express";
import i18n from "i18n";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

i18n.configure({
  locales: ["en", "es"],
  directory: path.join(__dirname, "locales"),
  defaultLocale: "en",
  cookie: "i18n",
});

const app = express();

app.use(i18n.init);

app.get("/", (req, res) => {
  res.send(req.__("Hello"));
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
