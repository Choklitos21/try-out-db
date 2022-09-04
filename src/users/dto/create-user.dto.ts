import {
    IsEmail,
    IsNotEmpty,
    IsNumber,
    IsString,
    MaxLength,
} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {

    @ApiProperty({ type: String })
    @IsNotEmpty()
    @IsString()
    @MaxLength(250)
    first_name: string

    @ApiProperty({ type: String })
    @IsNotEmpty()
    @IsString()
    @MaxLength(250)
    last_name: string

    @ApiProperty({ type: Number })
    @IsNotEmpty()
    @IsNumber()
    age: number

    @ApiProperty({ type: String })
    @IsNotEmpty()
    @IsEmail()
    email: string

    @ApiProperty({ type: String })
    @IsNotEmpty()
    @IsString()
    password: string

}
