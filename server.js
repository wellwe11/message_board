import express from "express";
import indexRouter from "./Routes/index.js";
import newRouter from "./Routes/new.js";

// Set up a views dirname & engine
// Set up a dirname for the css file

const PORT = 3000;
const app = express();

app.use("/", indexRouter);
app.use("/new", newRouter);

app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }
  console.log("App running");
});
