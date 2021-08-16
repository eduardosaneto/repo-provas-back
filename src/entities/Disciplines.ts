import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import Semesters from "./Semesters";
import DisciplinesProfessors from "./DisciplinesProfessors";

@Entity("disciplines")
export default class Disciplines{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    semesterId: number

    @ManyToOne(() => Semesters, sem => sem.discipline)
    semester: Semesters;

    @OneToMany(() => DisciplinesProfessors, dp => dp.discipline)
    disciplineProfessor: DisciplinesProfessors;
}