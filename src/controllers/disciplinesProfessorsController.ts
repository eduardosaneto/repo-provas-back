import { Request, Response } from "express";

import * as disciplinesProfessorsService from "../services/disciplinesProfessorsService";

export async function getDisciplinesAndProfessors (req: Request, res: Response) {
    const relations = await disciplinesProfessorsService.getAllRelations();
    res.send(relations);
}