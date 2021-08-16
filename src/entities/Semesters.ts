import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Disciplines from "./Disciplines";

@Entity("semesters")
export default class Semesters{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Disciplines, d => d.semester)
    discipline: Disciplines[];
}