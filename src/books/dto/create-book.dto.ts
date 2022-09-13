import { ApiProperty } from "@nestjs/swagger"
import { IsArray, IsDate, IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateBookDto {

    @ApiProperty({ type: String })
    @IsNotEmpty()
    @IsString()
    title: string

    @ApiProperty({ type: String })
    @IsString()
    genre: string

    @ApiProperty({ type: Date })
    @IsNotEmpty()
    @IsDateString()
    release_date: string

    @ApiProperty({ type: String })
    @IsNotEmpty()
    @IsString()
    author: string

    @ApiProperty({ type: Number })
    @IsNumber()
    sold: number

    @ApiProperty({ type: [String] })
    @IsNotEmpty()
    @IsArray()
    lenguages: string[]

}
