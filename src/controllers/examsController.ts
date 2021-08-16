import { Request, Response } from "express";

import * as examsService from "../services/examsService";

export async function sendNewExam (req: Request, res: Response) {
    const relations = await examsService.sendExam();
    res.send(relations);
}