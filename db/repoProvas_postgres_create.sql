CREATE TABLE "exams" (
	"id" serial NOT NULL,
	"name" TEXT NOT NULL,
	"examLink" TEXT NOT NULL UNIQUE,
	"disciplineId" integer NOT NULL,
	"professorId" integer NOT NULL,
	"categoryId" serial NOT NULL,
	CONSTRAINT "exams_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "categories" (
	"id" serial NOT NULL,
	"name" TEXT NOT NULL,
	CONSTRAINT "categories_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "professors" (
	"id" serial NOT NULL,
	"name" TEXT NOT NULL UNIQUE,
	CONSTRAINT "professors_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "disciplines" (
	"id" serial NOT NULL,
	"name" TEXT NOT NULL UNIQUE,
	"semesterId" bigint NOT NULL,
	CONSTRAINT "disciplines_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "disciplines_professors" (
	"id" serial NOT NULL,
	"disciplineId" serial NOT NULL,
	"professorId" serial NOT NULL,
	CONSTRAINT "disciplines_professors_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "semesters" (
	"id" serial NOT NULL,
	"name" TEXT NOT NULL UNIQUE,
	CONSTRAINT "semester_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



ALTER TABLE "exams" ADD CONSTRAINT "exams_fk0" FOREIGN KEY ("disciplineId") REFERENCES "disciplines"("id");
ALTER TABLE "exams" ADD CONSTRAINT "exams_fk1" FOREIGN KEY ("professorId") REFERENCES "professors"("id");
ALTER TABLE "exams" ADD CONSTRAINT "exams_fk2" FOREIGN KEY ("categoryId") REFERENCES "categories"("id");



ALTER TABLE "disciplines" ADD CONSTRAINT "disciplines_fk0" FOREIGN KEY ("semesterId") REFERENCES "semesters"("id");

ALTER TABLE "disciplines_professors" ADD CONSTRAINT "disciplines_professors_fk0" FOREIGN KEY ("disciplineId") REFERENCES "disciplines"("id");
ALTER TABLE "disciplines_professors" ADD CONSTRAINT "disciplines_professors_fk1" FOREIGN KEY ("professorId") REFERENCES "professors"("id");








