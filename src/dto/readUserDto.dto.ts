import {
    IsInt,
    IsNotEmpty,
    IsString,
    MaxLength,
    Min,
    MinLength
} from "class-validator";
import {Expose} from "class-transformer";

export class ReadUserDto {

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(50)
    @Expose()
    firstName: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(50)
    @Expose()
    lastName: string;

    @IsNotEmpty()
    @IsInt()
    @Min(18)
    @Expose()
    age: number;
}