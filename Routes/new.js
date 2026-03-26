import { Router } from "express";
import { messages } from "./index.js";

const newRouter = Router();

newRouter.get("/", (req, res) => res.render("form"));

newRouter.post("/", (req, res) => {
  (messages.push({ text: req.body.formMessage, user: req.body.formName }),
    res.redirect("/"));
});

export default newRouter;
