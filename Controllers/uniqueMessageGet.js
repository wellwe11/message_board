import { matchedData, param, validationResult } from "express-validator";
import { findMessage } from "../db/queries.js";

const validateParam = [
  param("id")
    .trim()
    .isInt({ min: 1 })
    .withMessage("ID must be a valid positive number")
    .toInt(),
];

export const uniqueImageGet = [
  ...validateParam,
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      console.log("Faield to find id ", errors);
      return res.status(400).render("index", {
        error: errors.array(),
        messages: [],
      });
    }

    const id = req.params.id;
    const message = await findMessage(id);
    res.render("message", { message });
  },
];
