import { getRepository } from "typeorm";

import Professors from "../../src/entities/Professors";

export async function createProfessors () {
  const professors = [
    { name: "Jair" },
    { name: "Thiago" },
    { name: "Ronaldo" }
  ]
  await getRepository(Professors).save(professors);
}
