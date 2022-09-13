import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'books'})
export class Book {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({type: 'varchar', unique: true, length: 200})
    title: string

    @Column({type: 'varchar', length: 200})
    genre: string

    @Column({type: 'date'})
    release_date: string

    @Column({type: 'varchar', length: 200})
    author: string

    @Column({type: 'int'})
    sold: number

    @Column('varchar', {array: true})
    lenguages: string[]
}
