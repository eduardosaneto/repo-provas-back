import supertest from "supertest";
import { getConnection } from "typeorm";

import app, { init } from "../../src/app";
import { createCategories } from "../factories/categoriesFactory";
import { createDisciplines } from "../factories/disciplinesFactory";
import { 
  getExamsParameters, 
  getWrongNameParam, 
  getWrongLinkParam,
  getWrongCategoryParam,
  getWrongDisciplineParam,
  getWrongProfessorParam,
  createExam
} from "../factories/examsFactory";
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

describe('POST /send/exam',()=>{
  it('should return status 400 for empty parameters sent for a new exam addition', async ()=>{
      const body = {};
      const response = await supertest(app).post('/send/exam').send(body);
      expect(response.status).toEqual(400);
  })
  it('should return status 400 for invalid name sent for a new exam addition', async ()=>{
    const body = await getWrongNameParam();
    const response = await supertest(app).post('/send/exam').send(body);
    expect(response.status).toEqual(400);
  })
  it('should return status 400 for invalid link sent for a new exam addition', async ()=>{
    const body = await getWrongLinkParam();
    const response = await supertest(app).post('/send/exam').send(body);
    expect(response.status).toEqual(400);
  })
  it('should return status 404 for a non existent category sent', async ()=>{
    const body = await getWrongCategoryParam();
    const response = await supertest(app).post('/send/exam').send(body);
    expect(response.status).toEqual(404);
  })
  it('should return status 404 for a non existent discipline sent', async ()=>{
    const body = await getWrongDisciplineParam();
    const response = await supertest(app).post('/send/exam').send(body);
    expect(response.status).toEqual(404);
  })
  it('should return status 404 for a non existent professor sent', async ()=>{
    const body = await getWrongProfessorParam();
    const response = await supertest(app).post('/send/exam').send(body);
    expect(response.status).toEqual(404);
  })
  it('should return status 409 if was sent a link that already exists', async ()=>{
    await createExam();
    const body = { 
      name: "2020.1", 
      examLink: "http://test.com",
      categoryId: 1,
      disciplineId: 1,
      professorId: 1    
    }
    const response = await supertest(app).post('/send/exam').send(body);
    expect(response.status).toEqual(409);
  })
  it('should return status 201 for a sucessful exam addition', async ()=>{
      const body = await getExamsParameters();
      const response = await supertest(app).post('/send/exam').send(body);
      expect(response.status).toEqual(201);
  })
})

describe('GET /professors/professorId/exams',()=>{
  it('should return status 200 and an array with every exam available for a professor', async ()=>{
      await createExam();
      const response = await supertest(app).get('/professors/1/exams')
      expect(response.body.length).toEqual(1);
      expect(response.status).toBe(200);
  })
})

describe('GET /disciplines/professorId/exams',()=>{
  it('should return status 200 and an array with every exam available for a discipline', async ()=>{
      await createExam();
      const response = await supertest(app).get('/disciplines/1/exams');
      expect(response.body.length).toEqual(1);
      expect(response.status).toBe(200);
  })
})