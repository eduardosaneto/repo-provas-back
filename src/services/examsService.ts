import { getRepository } from "typeorm";

import Exams from "../entities/Exams";
import { Exam } from "../interfaces/Exam";

export async function saveExam (params: Exam) {
  await getRepository(Exams).insert(params);
}