import { Test, TestingModule, TestingModuleBuilder } from "@nestjs/testing";
import { before } from "node:test";
import { AppModule } from "src/app.module";
import { CreateTodoDto } from "src/todo/dto/create-todo.dto";
import { TodoStatus } from "src/todo/todo.entity";
import { TodoRepository } from "src/todo/todo.repository";
import { TodoService } from "src/todo/todo.service";
import { User } from "src/user/user.entity";
import { UserRepository } from "src/user/user.repository";

describe('TodoService Int', () => {
    let todoRepository: TodoRepository;
    let userRepository: UserRepository;
    let todoService: TodoService;
    let moduleRef: TestingModule;

    beforeAll(async () => {
        moduleRef = await Test.createTestingModule({
            imports: [AppModule]
        }).compile();

        todoRepository = moduleRef.get(TodoRepository)
        userRepository = moduleRef.get(UserRepository)
        todoService = moduleRef.get(TodoService)

    })

    describe('createTodo()', () => {
        let user: User;
        const dto: CreateTodoDto = {
            title: "First todo",
            description: "first todo"
        }

        it('should create user', async () => {
            user = await userRepository.save({
                email: 'huyphan.t60@gmail.com',
                firstName: 'Huy',
                lastName: "Phan"
            });
            expect(typeof user.id).toBe('number')
        })

        it('should create todo', async () => {
            const todo = await todoService.createTodo(user, dto)
            expect(todo.title).toBe(dto.title)
            expect(todo.description).toBe(dto.description)
            expect(todo.status).toBe(TodoStatus.OPEN)
            expect(typeof todo.id).toBe('number')
        })

        it('should throw on duplicate title', async () => {
            await todoService.createTodo(user, dto)
                .then(todo => expect(todo).toBeUndefined())
                .catch(err => {
                    expect(err.message).toContain(`Duplicate entry '${dto.title}'`)
                })
        })
    })

    afterAll(async () => {
        await moduleRef.close()
    })
})