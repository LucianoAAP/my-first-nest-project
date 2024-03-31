import { Injectable } from '@nestjs/common';
import { AuthorCreationDto } from './author.dto';

@Injectable()
export class AuthorService {
  findAll() {
    return `This action returns all author`;
  }

  findOne(id: number) {
    return `This action returns a #${id} author`;
  }

  create(data: AuthorCreationDto) {
    return 'This action adds a new author';
  }

  update(id: number, data: AuthorCreationDto) {
    return `This action updates a #${id} author`;
  }

  delete(id: number) {
    return `This action removes a #${id} author`;
  }
}
