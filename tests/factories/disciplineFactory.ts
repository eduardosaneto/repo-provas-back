import { getRepository } from "typeorm";

import Categories from "../../src/entities/Categories";

export async function createCategory () {
  const category1 = { name: "P1" };
  const category2 = { name: "P2" };
  await getRepository(Categories).save(category1);
  await getRepository(Categories).save(category2);
}
