import { getRepository } from "typeorm";

import Exams from "../entities/Exams";

export async function saveExam () {
  const relations = await getRepository(Exams).find();
  return relations;
}