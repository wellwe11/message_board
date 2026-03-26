import express from "express";
import indexRouter from "./Routes";

const PORT = 3000;
const app = express();

app.use("/", indexRouter);

app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }
  console.log("App running");
});

// Create the following files:
// Routes, Views, Controllers, public

// Public: Styles.css
// Routes: Define a route
// Views: This is where ejs.files are stored (Primarily pages)
// Views/components: This is where footer, navbar etc are stored
// errors: A custom error
