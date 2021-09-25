import { getRepository } from "typeorm";

import DisciplinesProfessors from "../entities/DisciplinesProfessors";

export async function getProfessors(disciplineId: number) {
  const professors = await getRepository(DisciplinesProfessors).find({
    where: { disciplineId },
    relations: ["professor"]
  });
  return professors;
}
