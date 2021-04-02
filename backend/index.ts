import express from "express";
import mongoose from "mongoose";
import flyRouter from "./src/routers/fly";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const PORT = 8000;

mongoose.connect(
  "mongodb+srv://Eugene:Ntktajy12@air.wdvue.mongodb.net/Airlines?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(bodyParser());
app.use("/fly", flyRouter);
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
