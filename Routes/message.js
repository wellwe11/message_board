import { Router } from "express";

const messageRoute = Router();

messageRoute.get("/:id", (req, res) =>
  res.render("message", { id: req.params.id }),
);

export default messageRoute;
