import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import Semesters from "./Semesters";

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
}