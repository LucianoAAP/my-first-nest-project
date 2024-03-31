import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BookService } from './book.service';
import { BookCreationDto } from './book.dto';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  async findAll() {
    return this.bookService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.bookService.findOne(Number(id));
  }

  @Post()
  async create(@Body() body: BookCreationDto) {
    return this.bookService.create(body);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: BookCreationDto) {
    return this.bookService.update(Number(id), body);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.bookService.delete(Number(id));
    return 'Livro apagado com sucesso';
  }
}
