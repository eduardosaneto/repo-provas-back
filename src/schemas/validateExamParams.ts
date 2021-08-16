import { getRepository } from "typeorm";
import Categories from "../entities/Categories";
import Disciplines from "../entities/Disciplines";

import Exams from "../entities/Exams";
import Professors from "../entities/Professors";

export async function checkNotExistingCategory(params: number): Promise<boolean> {
    const categories = await getRepository(Categories).find();
    const categoriesIds = categories.map(c => c.id);
    const existingCategory = categoriesIds.find(c => params === c);

    if(!existingCategory) return false
    else return true;
}

export async function checkNotExistingDiscipline(params: number): Promise<boolean> {
  const disciplines = await getRepository(Disciplines).find();
  const disciplinesIds = disciplines.map(d => d.id);
  const existingDiscipline = disciplinesIds.find(d => params === d);

  if(!existingDiscipline) return false
  else return true;
}

export async function checkNotExistingProfessor(params: number): Promise<boolean> {
  const professors = await getRepository(Professors).find();
  const professorsIds = professors.map(p => p.id);
  const existingProfessor = professorsIds.find(p => params === p);

  if(!existingProfessor) return false
  else return true;
}

export async function checkSameExam(params: string): Promise<boolean>  {
  const exams = await getRepository(Exams).find();
  if(exams.length !== 0){
    const examsLinks = exams.map(e => e.examLink);
    const existingLink = examsLinks.find(p => params === p);
  
    if(existingLink) return true;
    else return false
  }
}