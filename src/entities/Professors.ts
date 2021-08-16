import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import DisciplinesProfessors from "./DisciplinesProfessors";
import Exams from "./Exams";

@Entity("professors")
export default class Professors{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => DisciplinesProfessors, dp => dp.professor)
    disciplineProfessors: DisciplinesProfessors[];

    @OneToMany(() => Exams, exam => exam.professor)
    exams: Exams[];
}