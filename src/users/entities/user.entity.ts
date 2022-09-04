import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn
} from "typeorm";

@Entity({name: 'users'})
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({type: 'varchar', length: 250})
    first_name: string

    @Column({type: 'varchar', length: 250})
    last_name: string

    @Column({type: 'int'})
    age: number

    @Column({type: 'varchar', unique: true})
    email: string

    @Column({type: 'varchar'})
    password: string

    @CreateDateColumn({ name: 'created_at'})
    createdAt: Date;

}