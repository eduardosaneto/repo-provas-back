import supertest from "supertest";
import { getConnection } from "typeorm";

import app, { init } from "../../src/app";
import { createCategories } from "../factories/categoriesFactory";
import { clearDatabase } from "../utils/database";

beforeAll(async () => {
  await init();
});

beforeEach(async () => {
  await clearDatabase();
});

afterAll(async () => {
  await getConnection().close();
});

describe("GET /categories", () => {
  it("should answer with status 200 and an array with every category available", async () => {
    await createCategories();
    const response = await supertest(app).get("/categories"); 
    expect(response.body.length).toEqual(3);
    expect(response.status).toBe(200);
  });
});
