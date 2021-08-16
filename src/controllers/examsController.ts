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