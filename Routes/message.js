import { Router } from "express";
import { uniqueImageGet } from "../Controllers/uniqueMessageGet.js";

const messageRoute = Router();

messageRoute.get("/:id", uniqueImageGet);

export default messageRoute;
