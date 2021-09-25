import { Request, Response } from "express";

import * as disciplinesProfessorsService from "../services/disciplinesProfessorsService";

export async function getProfessorsByDisciplines(req: Request, res: Response) {
  const disciplineId = Number(req.params.id);
  const professors = await disciplinesProfessorsService.getProfessors(disciplineId);
  res.send(professors);
}
