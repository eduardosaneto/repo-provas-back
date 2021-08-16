import supertest from "supertest";
import { getConnection } from "typeorm";

import app, { init } from "../../src/app";
import { createProfessors } from "../factories/professorsFactory";
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
  it("should answer with status 200 and an array with every professor available", async () => {
    await createProfessors();
    const response = await supertest(app).get("/disciplines"); 
    expect(response.status).toBe(200);
  });
});
