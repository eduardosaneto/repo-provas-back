import supertest from "supertest";
import { getConnection } from "typeorm";

import app, { init } from "../../src/app";
import { createProfessorDisciplineRelation } from "../factories/disciplines_professorsFactory";
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

describe('GET /disciplines/disciplineId/professors',()=>{
  it('should return status 200 and an array with every professor available for the discipline', async ()=>{
      await createProfessorDisciplineRelation();
      const response = await supertest(app).get('/disciplines/1/professors');
      expect(response.body.length).toEqual(2);
      expect(response.status).toBe(200);
  })
})