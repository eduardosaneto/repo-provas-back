import { getRepository } from "typeorm";
import Exams from "../entities/Exams";
import { Exam } from "../interfaces/Exam";

import { 
  checkNotExistingCategory, 
  checkNotExistingDiscipline,
  checkNotExistingProfessor,
  checkSameExam
} from "../../src/schemas/validateExamParams";

export async function saveExam (params: Exam) {
  const checkExistingCategory = await checkNotExistingCategory(params.categoryId);
  const checkExistingDiscipline = await checkNotExistingDiscipline(params.disciplineId);
  const checkExistingProfessor = await checkNotExistingProfessor(params.professorId);

  if(
    !checkExistingCategory || 
    !checkExistingDiscipline || 
    !checkExistingProfessor 
  ) return 0;

  const sameExam = await checkSameExam(params.examLink);
  if(sameExam) return 1
  
  await getRepository(Exams).insert(params);
}

export async function getExamsByDiscipline (disciplineId: number) {
  const exams = await getRepository(Exams).find({
    where: {disciplineId},
    relations: ["professor", "category"]
  });
  return exams;
}

export async function getExamsByProfessor (professorId: number) {
  const exams = await getRepository(Exams).find({
    where: {professorId},
    relations: ["discipline", "category"]
  });
  return exams;
}