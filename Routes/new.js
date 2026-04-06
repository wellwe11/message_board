import { Router } from "express";
import { messagePost } from "../Controllers/messagePost.js";

const newRouter = Router();

newRouter.get("/", (req, res) => res.render("form"));
newRouter.post("/", messagePost);

export default newRouter;
