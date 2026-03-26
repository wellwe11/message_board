import { Router } from "express";

const newRouter = Router();

newRouter.get("/", (req, res) => res.send("This is the 'New' router"));

export default newRouter;
