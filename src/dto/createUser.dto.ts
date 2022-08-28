import {User} from "../entities/user.entity";
import {
    IsEmail,
    IsNotEmpty,
    IsNumber,
    IsString,
    MaxLength,
    Min,
    MinLength
} from "class-validator";
import {Expose} from "class-transformer";

export class CreateUserDto extends User {
    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(50)
    @Expose()
    firstname: string

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(50)
    @Expose()
    lastname: string

    @IsNotEmpty()
    @IsNumber()
    @Min(18)
    @Expose()
    age: number

    @IsNotEmpty()
    @IsEmail()
    @Expose()
    email: string

    @IsNotEmpty()
    @IsString()
    @Expose()
    password: string

}