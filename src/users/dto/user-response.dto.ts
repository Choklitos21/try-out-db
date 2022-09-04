import {
    IsEmail,
    IsNotEmpty,
    IsNumber,
    IsString,
    MaxLength,
} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class UserResponseDto {

    @ApiProperty({ type: String })
    @IsNotEmpty()
    @IsString()
    @MaxLength(250)
    firs_tname: string

    @ApiProperty({ type: String })
    @IsNotEmpty()
    @IsString()
    @MaxLength(250)
    last_name: string

    @ApiProperty({ type: Number })
    @IsNotEmpty()
    @IsNumber()
    age: number

}