import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodoRepository } from './todo.repository';
import { User } from 'src/user/user.entity';

@Injectable()
export class TodoService {
  constructor(
    private readonly todoRepository: TodoRepository
  ) { }

  createTodo(user: User, dto: CreateTodoDto) {
    return this.todoRepository.save({
      user,
      ...dto
    })
  }

  updateTodo() { }
}
