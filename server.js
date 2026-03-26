import express from "express";
import { fileURLToPath } from "node:url";
import path, { dirname } from "node:path";

import indexRouter from "./Routes/index.js";
import newRouter from "./Routes/new.js";
import messageRoute from "./Routes/message.js";

// Set up a dirname for the css file

// Define __filename because I am using modules, instead of commonjs
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = 3000;
const app = express();

// define a path for app to route to views
app.set("views", path.join(__dirname, "views"));
// Define EJS engine
app.set("view engine", "ejs");

// decode forms inputs
app.use(express.urlencoded({ extended: true }));

// Roots
app.use("/", indexRouter);
app.use("/new", newRouter);
app.use("/message", messageRoute);

// Listener
app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }
  console.log("App running");
});
