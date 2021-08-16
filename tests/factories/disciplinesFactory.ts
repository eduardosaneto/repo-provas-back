import { getRepository } from "typeorm";

import Semesters from "../../src/entities/Semesters";
import Disciplines from "../../src/entities/Disciplines";

export async function createDisciplines () {
  await createSemesters();
  const disciplines = [
    { name: "Cálculo 1", semesterId: 1 },
    { name: "Cálculo 2", semesterId: 2 },
    { name: "Cálculo 3", semesterId: 3 }
  ]
  await getRepository(Disciplines).save(disciplines);
}

async function createSemesters () {
  const semesters = [{name: "1"}, {name: "2"}, {name: "3"}];
  await getRepository(Semesters).save(semesters);
}
