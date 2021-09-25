import "./setup";

import express from "express";
import cors from "cors";
import "reflect-metadata";

import connectDatabase from "./database";

import { errorHandler } from "./middlewares/errorHandler";
import * as categoriesController from "./controllers/categoriesController";
import * as disciplinesController from "./controllers/disciplinesController";
import * as disciplinesProfessorsController from "./controllers/disciplinesProfessorsController";
import * as professorsController from "./controllers/professorsController";
import * as examsController from "./controllers/examsController";

const app = express();
app.use(cors());
app.use(express.json());
app.use(errorHandler);

app.get("/categories", categoriesController.getCategories);
app.get("/disciplines", disciplinesController.getDisciplines);
app.get(
  "/disciplines/:id/professors",
  disciplinesProfessorsController.getProfessorsByDisciplines
);
app.get("/disciplines/:id/exams", examsController.loadExamsByDiscipline);
app.get("/professors", professorsController.getProfessors);
app.get("/professors/:id/exams", examsController.loadExamsByProfessor);
app.post("/send/exam", examsController.saveNewExam);

export async function init(): Promise<void> {
  await connectDatabase();
}

export default app;
