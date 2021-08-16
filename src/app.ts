import "./setup";

import express from "express";
import cors from "cors";
import "reflect-metadata";

import connectDatabase from "./database";

import { errorHandler } from "./middlewares/errorHandler";
import * as categoriesController from "./controllers/categoriesController";

const app = express();
app.use(cors());
app.use(express.json());
app.use(errorHandler);

app.get("/send", categoriesController.getCategories);
// app.get("/send", disciplinesController.getDisciplines);
// app.get("/send", professorsController.getProfessors);
// app.post("/send", examsController.sendExam);

export async function init () {
  await connectDatabase();
}

export default app;
