import express from "express";
import { postDeck, getDecks } from "../controllers/decks";

const router = express.Router();

router.route("/decks").post(postDeck).get(getDecks);

export default router;
