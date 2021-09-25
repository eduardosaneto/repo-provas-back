import { Request, Response } from "express";
import { sendExamSchema } from "../schemas/sendExamSchemas";

import * as examsService from "../services/examsService";

export async function saveNewExam(req: Request, res: Response) {
  const { error } = sendExamSchema.validate(req.body);
  if (error) return res.sendStatus(400);

  const examParams = req.body;
  const exam = await examsService.saveExam(examParams);
  if (exam === 0) res.sendStatus(404);
  else if (exam === 1) res.sendStatus(409);
  res.sendStatus(201);
}

export async function loadExamsByDiscipline(req: Request, res: Response) {
  const disciplineId = Number(req.params.id);
  const exams = await examsService.getExamsByDiscipline(disciplineId);
  res.send(exams);
}

export async function loadExamsByProfessor(req: Request, res: Response) {
  const professorId = Number(req.params.id);
  const exams = await examsService.getExamsByProfessor(professorId);
  res.send(exams);
}
