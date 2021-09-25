import { getRepository } from "typeorm";

import Professors from "../entities/Professors";

export async function getAllProfessors() {
  const professors = await getRepository(Professors).find();
  return professors;
}
