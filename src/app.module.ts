import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './modules/book/book.module';
import { AuthorModule } from './modules/author/author.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [BookModule, AuthorModule],
})
export class AppModule {}
