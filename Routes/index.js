import { Router } from "express";
import { messagesGet } from "../Controllers/messagesGet.js";

const indexRouter = Router();

indexRouter.get("/", messagesGet);

export default indexRouter;
