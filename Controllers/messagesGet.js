import { getAllMessages } from "../db/queries.js";

export const messagesGet = async (req, res) => {
  const messages = await getAllMessages();

  res.render("index", {
    messages,
  });
};
