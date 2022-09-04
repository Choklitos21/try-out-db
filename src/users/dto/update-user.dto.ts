import {ApiProperty, PartialType} from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import {
    IsNotEmpty,
    IsNumber,
    IsString,
    MaxLength
} from "class-validator";

export class UpdateUserDto extends PartialType(CreateUserDto) {

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

}
