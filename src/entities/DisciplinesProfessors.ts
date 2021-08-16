import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import Disciplines from "./Disciplines";
import Professors from "./Professors";

@Entity("disciplines_professors")
export default class DisciplinesProfessors{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    disciplineId: number

    @Column()    
    professorId: number

    @ManyToOne(() => Disciplines, d => d.disciplineProfessor)
    discipline: Disciplines;

    @ManyToOne(() => Professors, p => p.disciplineProfessor)
    professor: Professors;
}