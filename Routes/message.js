import { Router } from "express";

const messageRoute = Router();

messageRoute.get("/", (req, res) => res.render("message"));

export default messageRoute;
