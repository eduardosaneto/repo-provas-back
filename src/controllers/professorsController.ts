import { Request, Response } from "express";

import * as professorsService from "../services/professorsService";

export async function getProfessors(req: Request, res: Response) {
  const professors = await professorsService.getAllProfessors();
  res.send(professors);
}
