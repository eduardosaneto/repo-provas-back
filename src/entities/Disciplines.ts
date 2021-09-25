import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import Semesters from "./Semesters";
import DisciplinesProfessors from "./DisciplinesProfessors";
import Exams from "./Exams";

@Entity("disciplines")
export default class Disciplines {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    semesterId: number

    @ManyToOne(() => Semesters, sem => sem.discipline)
    semester: Semesters;

    @OneToMany(() => DisciplinesProfessors, dp => dp.discipline)
    disciplineProfessors: DisciplinesProfessors[];

    @OneToMany(() => Exams, exam => exam.discipline)
    exams: Exams;
}
