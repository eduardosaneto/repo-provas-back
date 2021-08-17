import { getRepository } from "typeorm";
import faker from "faker";

import { generatePrimaryData } from "./examsFactory";
import DisciplinesProfessors from "../../src/entities/DisciplinesProfessors";

export async function createProfessorDisciplineRelation () {
    await generatePrimaryData();
    const disciplines_professors = [
        { disciplineId: 1, professorId: 1 },
        { disciplineId: 1, professorId: 3 },
        { disciplineId: 2, professorId: 2 }
    ]
    await getRepository(DisciplinesProfessors).save(disciplines_professors);
}
