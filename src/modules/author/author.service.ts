import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { AuthorCreationDto } from './author.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class AuthorService {
  constructor(private prisma: PrismaService) {}

  findAll = async () => this.prisma.author.findMany();

  async findOne(id: number) {
    const author = await this.prisma.author.findUnique({ where: { id } });
    if (!author) throw new NotFoundException('Autor não encontrado');
    return author;
  }

  async create(data: AuthorCreationDto) {
    return this.prisma.author.create({ data });
  }

  async update(id: number, data: AuthorCreationDto) {
    const author = await this.prisma.author.findUnique({ where: { id } });
    if (!author) throw new NotFoundException('Autor não encontrado');
    return this.prisma.author.update({ data, where: { id } });
  }

  async delete(id: number) {
    const author = await this.prisma.author.findUnique({ where: { id } });
    if (!author) throw new NotFoundException('Autor não encontrado');
    await this.prisma.author.delete({ where: { id } });
  }

  async addBook(authorId: number, bookId: number) {
    const author = await this.prisma.author.findUnique({
      where: { id: authorId },
    });
    if (!author) throw new NotFoundException('Autor não encontrado');
    const book = await this.prisma.book.findUnique({
      where: { id: bookId },
    });
    if (!book) throw new NotFoundException('Livro não encontrado');
    const bookAuthors = await this.prisma.bookAuthors.findMany({
      where: { authorId },
    });
    const hasBook = bookAuthors.some((book) => book.bookId === bookId);
    if (hasBook) {
      throw new BadRequestException('Este livro já está atribuído ao autor');
    }
    await this.prisma.bookAuthors.create({ data: { bookId, authorId } });
    const bookIds = bookAuthors.map((bookAuthor) => bookAuthor.bookId);
    bookIds.push(bookId);
    return { ...author, bookIds };
  }
}
