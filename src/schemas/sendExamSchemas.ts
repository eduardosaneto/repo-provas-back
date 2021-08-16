import joi from 'joi';

const url = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;

const sendExamSchema = joi.object({
  name: joi.string().min(5).required(),
  examLink: joi.string().trim().pattern(url).required(),
  discipline: joi.string().required(),
  professor: joi.string().required(),
  categorie: joi.string().min(2).required(),
});

export { sendExamSchema };