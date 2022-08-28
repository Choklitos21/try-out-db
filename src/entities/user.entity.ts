import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn
} from "typeorm";

@Entity({name: 'users'})
export class User {
    @PrimaryGeneratedColumn({type: 'integer'})
    id: string

    @Column({type: 'varchar', length: 250})
    firstname: string

    @Column({type: 'varchar', length: 250})
    lastname: string

    @Column({type: 'int'})
    age: number

    @Column({type: 'varchar', length: 250})
    email: string

    @Column({type: 'varchar', length: 250})
    password: string

}