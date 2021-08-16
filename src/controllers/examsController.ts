import { Request, Response } from "express";

import * as examsService from "../services/examsService";

export async function saveNewExam (req: Request, res: Response) {
    const relations = await examsService.saveExam();
    res.send(relations);
}