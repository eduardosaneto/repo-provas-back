import { getRepository } from "typeorm";

import Categories from "../../src/entities/Categories";

export async function createCategory () {
  const category1 = { name: "P1" };
  const category2 = { name: "P2" };
  const category3 = { name: "PF" };
  await getRepository(Categories).save([category1, category2, category3]);
}