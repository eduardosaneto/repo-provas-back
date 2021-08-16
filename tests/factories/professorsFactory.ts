import { getRepository } from "typeorm";
import faker from "faker";

import Professors from "../../src/entities/Professors";

export async function createProfessors () {
  const professors = [
    { name: faker.name.firstName() },
    { name: faker.name.firstName() },
    { name: faker.name.firstName() }
  ]
  await getRepository(Professors).save(professors);
}
