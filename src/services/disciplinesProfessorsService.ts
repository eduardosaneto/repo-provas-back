import { getRepository } from "typeorm";

import DisciplinesProfessors from "../entities/DisciplinesProfessors";

export async function getAllRelations () {
  const relations = await getRepository(DisciplinesProfessors).find();
  return relations;
}