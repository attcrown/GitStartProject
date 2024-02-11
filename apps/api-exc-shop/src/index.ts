import { appfirebase, db } from './services/config';
import express, { json } from "express";
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  try {
    res.send({ result: "Hello World!", db });
    console.log('success DB')
  } catch (error) {
    console.error("Error accessing Firebase database:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
