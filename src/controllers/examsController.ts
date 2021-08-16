import { Request, Response } from "express";
import { sendExamSchema } from "../schemas/sendExamSchemas";

import * as examsService from "../services/examsService";

export async function saveNewExam (req: Request, res: Response) {
    const { error } = sendExamSchema.validate(req.body);
    if(error) return res.sendStatus(400); 

    const examParams = req.body;
    await examsService.saveExam(examParams);
    res.sendStatus(201);
}

export async function loadExamsByDiscipline (req: Request, res: Response) {
    const disciplineId = Number(req.params.id);
    const exams = await examsService.getExamsByDiscipline(disciplineId);
    res.send(exams);
}