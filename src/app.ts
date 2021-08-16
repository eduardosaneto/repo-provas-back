import "./setup";

import express from "express";
import cors from "cors";
import "reflect-metadata";

import connectDatabase from "./database";

import { errorHandler } from "./middlewares/errorHandler";
import * as categoriesController from "./controllers/categoriesController";
import * as disciplinesController from "./controllers/disciplinesController";

const app = express();
app.use(cors());
app.use(express.json());
app.use(errorHandler);

app.get("/categories", categoriesController.getCategories);
app.get("/disciplines", disciplinesController.getDisciplines);
// app.get("/send", professorsController.getProfessors);
// app.post("/send", examsController.sendExam);

export async function init () {
  await connectDatabase();
}

export default app;
