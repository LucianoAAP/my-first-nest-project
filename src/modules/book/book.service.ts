import { Injectable, NotFoundException } from '@nestjs/common';
import { BookCreationDto } from './book.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class BookService {
  constructor(private prisma: PrismaService) {}

  findAll = async () => this.prisma.book.findMany();

  async findOne(id: number) {
    const book = await this.prisma.book.findUnique({ where: { id } });
    if (!book) throw new NotFoundException('Livro não encontrado');
    return book;
  }

  create = async (data: BookCreationDto) => this.prisma.book.create({ data });

  async update(id: number, data: BookCreationDto) {
    const book = await this.prisma.book.findUnique({ where: { id } });
    if (!book) throw new NotFoundException('Livro não encontrado');
    return this.prisma.book.update({ data, where: { id } });
  }

  async delete(id: number) {
    const book = await this.prisma.book.findUnique({ where: { id } });
    if (!book) throw new NotFoundException('Livro não encontrado');
    await this.prisma.book.delete({ where: { id } });
  }
}
