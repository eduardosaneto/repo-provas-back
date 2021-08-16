import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import DisciplinesProfessors from "./DisciplinesProfessors";

@Entity("professors")
export default class Professors{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => DisciplinesProfessors, dp => dp.professor)
    disciplineProfessor: DisciplinesProfessors;
}