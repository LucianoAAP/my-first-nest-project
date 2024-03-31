import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthorCreationDto } from './author.dto';

@Controller('author')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Get()
  async findAll() {
    return this.authorService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.authorService.findOne(Number(id));
  }

  @Post()
  async create(@Body() body: AuthorCreationDto) {
    return this.authorService.create(body);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: AuthorCreationDto) {
    return this.authorService.update(Number(id), body);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.authorService.delete(Number(id));
  }
}
