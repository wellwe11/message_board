import { Router } from "express";

const newRouter = Router();

newRouter.get("/", (req, res) => res.render("form"));

newRouter.post("/", (req, res) =>
  res.send(`This is the name: ${req.body.formName}`),
);

export default newRouter;
