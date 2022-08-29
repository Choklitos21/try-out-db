import {
    Column,
    Entity,
    PrimaryGeneratedColumn
} from "typeorm";

@Entity({name: 'users'})
export class User {
    @PrimaryGeneratedColumn({type: 'integer'})
    id: string

    @Column({type: 'varchar', length: 250})
    first_name: string

    @Column({type: 'varchar', length: 250})
    last_name: string

    @Column({type: 'int'})
    age: number

    @Column({type: 'varchar', length: 250})
    email: string

    @Column({type: 'varchar', length: 250})
    password: string

}