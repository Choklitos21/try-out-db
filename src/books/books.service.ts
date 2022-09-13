import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Book } from './entities/book.entity';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { ApiTags } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';

@ApiTags('Books')
@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepo: Repository<Book>
    ){}

  async create(book: CreateBookDto) {
    try {
      return await this.bookRepo.save(book)
    } catch(e) {
      throw new HttpException('Book cannot be saved', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  async findAll() {
    return await this.bookRepo.find()
  }

  async findById(id: string) {
    try {
      const bookFound = await this.bookRepo.findOne({where: {id: id}})
      if(!bookFound)
        throw new HttpException('Book not found', HttpStatus.NOT_FOUND)
    } catch(e) {
      throw new HttpException('Internal error', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  update(id: string, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: string) {
    return `This action removes a #${id} book`;
  }
}
