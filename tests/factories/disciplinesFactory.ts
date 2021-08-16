import { getRepository } from "typeorm";
import faker from "faker";

import Semesters from "../../src/entities/Semesters";
import Disciplines from "../../src/entities/Disciplines";

export async function createDisciplines () {
  await createSemesters();
  const disciplines = [
    { name: faker.name.title(), semesterId: 1 },
    { name: faker.name.title(), semesterId: 2 },
    { name: faker.name.title(), semesterId: 3 }
  ]
  await getRepository(Disciplines).save(disciplines);
}

async function createSemesters () {
  const semesters = [{name: "1"}, {name: "2"}, {name: "3"}];
  await getRepository(Semesters).save(semesters);
}
