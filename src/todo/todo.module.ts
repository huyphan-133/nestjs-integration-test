import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './todo.entity';
import { AppModule } from 'src/app.module';
import { TodoRepository } from './todo.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([Todo]),
  ],
  providers: [TodoService, TodoRepository],
  exports: [
    TodoRepository,
    TodoService
  ]
})
export class TodoModule { }
