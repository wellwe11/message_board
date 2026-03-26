import { Router } from "express";
import { messages } from "./index.js";

const messageRoute = Router();

messageRoute.get("/:id", (req, res) =>
  res.render("message", {
    id: req.params.id,
    message: messages[req.params.id],
  }),
);

export default messageRoute;
