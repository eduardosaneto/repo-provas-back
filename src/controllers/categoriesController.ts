import { Request, Response } from "express";

import * as categoriesService from "../services/categoriesService";

export async function getCategories(req: Request, res: Response) {
  const categories = await categoriesService.getAllCategories();
  res.send(categories);
}
