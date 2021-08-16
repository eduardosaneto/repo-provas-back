import { getRepository } from "typeorm";

import Exams from "../entities/Exams";
import { Exam } from "../interfaces/Exam";

export async function saveExam (params: Exam) {
  await getRepository(Exams).insert(params);
}

export async function getExamsByDiscipline (disciplineId: number) {
  const exams = await getRepository(Exams).find({
    where: {disciplineId},
    relations: ["professor", "category"]
  });
  return exams;
}