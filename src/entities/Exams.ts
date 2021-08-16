import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import Categories from "./Categories";
import Disciplines from "./Disciplines";
import Professors from "./Professors";

@Entity("exams")
export default class Exams{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    examLink: string

    @Column()
    disciplineId: number

    @Column()
    professorId: number

    @Column()
    categoryId: number

    @ManyToOne(() => Disciplines, d => d.exams)
    discipline: Disciplines

    @ManyToOne(() => Professors, p => p.exams)
    professor: Professors

    @ManyToOne(() => Categories, c => c.exams)
    category: Categories;
}