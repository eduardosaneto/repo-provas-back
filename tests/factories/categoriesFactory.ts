import { getRepository } from "typeorm";

import Categories from "../../src/entities/Categories";

export async function createCategories () {
  const categories = [
    { name: "P1" },
    { name: "P2" },
    { name: "PF" }
  ]
  await getRepository(Categories).save(categories);
}
