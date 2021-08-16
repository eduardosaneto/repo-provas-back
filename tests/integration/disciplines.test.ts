import supertest from "supertest";
import { getConnection } from "typeorm";

import app, { init } from "../../src/app";
import { createDisciplines } from "../factories/disciplinesFactory";
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

describe("GET /disciplines", () => {
  it("should answer with status 200 and an array with every discipline available", async () => {
    await createDisciplines();
    const response = await supertest(app).get("/disciplines"); 
    expect(response.body.length).toEqual(3);
    expect(response.status).toBe(200);
  });
});
