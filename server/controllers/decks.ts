import Deck from "../models/Deck";
import { Request, Response } from "express";

export const postDeck = async (req: Request, res: Response) => {
  const { title } = req.body;
  const newDeck = new Deck({ title });
  const createdDeck = await newDeck.save();
  res.status(201).json(createdDeck);
};

export const getDecks = async (req: Request, res: Response) => {
  const decks = await Deck.find();
  res.status(200).json(decks);
};
