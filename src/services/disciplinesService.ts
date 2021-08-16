import { getRepository } from "typeorm";

import Disciplines from "../entities/Disciplines";

export async function getAllDisciplines () {
  const disciplines = await getRepository(Disciplines).find();
  return disciplines;
}
