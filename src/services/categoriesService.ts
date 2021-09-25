import { getRepository } from "typeorm";

import Categories from "../entities/Categories";

export async function getAllCategories() {
  const categories = await getRepository(Categories).find();
  return categories;
}
