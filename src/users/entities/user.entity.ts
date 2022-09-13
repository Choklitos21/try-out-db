import {
    Column,
    Entity,
    CreateDateColumn,
    PrimaryGeneratedColumn
} from "typeorm";
import { UserRoles } from '../../utils/enums/user-roles.enum';

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

    @Column('varchar', {array: true, default: [`${UserRoles.USER}`]})
    roles: string[]

    @CreateDateColumn({ name: 'created_at'})
    createdAt: Date;

}