import joi from 'joi';

const url = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;

const sendExamSchema = joi.object({
  name: joi.string().min(5).required(),
  examLink: joi.string().trim().pattern(url).required(),
  disciplineId: joi.number().integer().required(),
  professorId: joi.number().integer().required(),
  categorieId: joi.number().integer().required()
});

export { sendExamSchema };