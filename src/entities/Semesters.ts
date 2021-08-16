import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("semesters")
export default class Semesters{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}