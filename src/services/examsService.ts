import { getRepository } from "typeorm";

import Exams from "../entities/Exams";

export async function sendExam () {
  const relations = await getRepository(Exams).find();
  return relations;
}