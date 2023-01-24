import express, { Request, Response } from "express";
import router from "./routes/deck";
import "dotenv/config";
import mongoose from "mongoose";
import cors from "cors";

mongoose.set("strictQuery", true);

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", router);

const PORT = process.env.PORT || 5050;

mongoose
  .connect(`${process.env.DB_URI}`)
  .then((res) => {
    app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
    console.log(`Connected on ${res.connection.host}`);
  })
  .catch(() => console.log("Unable to connect to the database"));
