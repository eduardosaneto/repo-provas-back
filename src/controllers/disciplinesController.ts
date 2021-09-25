import { Request, Response } from "express";

import * as disciplinesService from "../services/disciplinesService";

export async function getDisciplines(req: Request, res: Response) {
  const disciplines = await disciplinesService.getAllDisciplines();
  res.send(disciplines);
}
