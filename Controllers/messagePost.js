import { body, matchedData, validationResult } from "express-validator";
import { insertMessage } from "../db/queries.js";

const validateInput = [
  body("formMessage")
    .trim()
    .notEmpty()
    .withMessage("Message cannot be empty")
    .isLength({ max: 1000 })
    .withMessage("Message is too long (max 1000 characters)")
    .escape(),

  body("formName")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ max: 50 })
    .withMessage("Name is too long")
    .escape(),
];

export const messagePost = [
  ...validateInput,
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      console.log("Failed to post", errors);
      return res.status(400).render("form", {
        error: errors.array(),
      });
    }

    const date = new Date();
    const { formMessage: message, formName: username } = matchedData(req);
    await insertMessage(message, username, date);
    res.redirect("/");
  },
];
