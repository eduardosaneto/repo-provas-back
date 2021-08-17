import { getRepository } from "typeorm";
import faker from "faker";

import { createCategories } from "./categoriesFactory";
import { createDisciplines } from "./disciplinesFactory";
import { createProfessors } from "./professorsFactory";

import { Exam } from "../../src/interfaces/Exam";
import Exams from "../../src/entities/Exams";

export async function getExamsParameters ():Promise<Exam> {
  await generatePrimaryData();
  const body = { 
    name: "2020.1", 
    examLink: faker.internet.url(),
    categoryId: 1,
    disciplineId: 1,
    professorId: 1    
  }
  return body;
}

export async function getWrongNameParam ():Promise<Exam> {
  await generatePrimaryData();
  const body = { 
    name: " ",
    examLink: faker.internet.url(),
    categoryId: 1,
    disciplineId: 1,
    professorId: 1    
  }
  return body;
}

export async function getWrongLinkParam ():Promise<Exam> {
  await generatePrimaryData();
  const body = { 
    name: "2020.1", 
    examLink: " ",
    categoryId: 1,
    disciplineId: 1,
    professorId: 1    
  }
  return body;
}

export async function getWrongCategoryParam ():Promise<Exam> {
  await generatePrimaryData();
  const body = { 
    name: "2020.1", 
    examLink: faker.internet.url(),
    categoryId: 15,
    disciplineId: 1,
    professorId: 1    
  }
  return body;
}

export async function getWrongDisciplineParam ():Promise<Exam> {
  await generatePrimaryData();
  const body = { 
    name: "2020.1", 
    examLink: faker.internet.url(),
    categoryId: 1,
    disciplineId: 21,
    professorId: 1    
  }
  return body;
}

export async function getWrongProfessorParam ():Promise<Exam> {
  await generatePrimaryData();
  const body = { 
    name: "2020.1", 
    examLink: faker.internet.url(),
    categoryId: 1,
    disciplineId: 1,
    professorId: 20    
  }
  return body;
}

export async function createExam () {
  await generatePrimaryData();
  const body = { 
    name: "2020.1", 
    examLink: "http://test.com",
    categoryId: 1,
    disciplineId: 1,
    professorId: 1    
  }  
  await getRepository(Exams).insert(body);
}

export async function generatePrimaryData() {
  await createCategories();
  await createDisciplines();
  await createProfessors();
}

