import { Test, TestingModule } from "@nestjs/testing";
import { AppModule } from "src/app.module";
import { CreateUserDto } from "src/user/dto/create-user.dto";
import { UserService } from "src/user/user.service";

describe('UserService Int', () => {
    let underTest: UserService
    let moduleRef: TestingModule

    beforeAll(async () => {
        moduleRef = await Test.createTestingModule({
            imports: [AppModule]
        }).compile();

        underTest = moduleRef.get(UserService)
    });

    describe('createUser()', () => {
        let createUserDto: CreateUserDto = {
            email: 'huyphan.t60@gmail.com',
            firstName: "Huy123",
            lastName: 'Phan'
        }

        it('should create user', async () => {
            const user = await underTest.createUser(createUserDto)
            expect(typeof user.id).toBe('number');
            expect(user.email).toBe(createUserDto.email);
            expect(user.firstName).toBe(createUserDto.firstName);
            expect(user.lastName).toBe(createUserDto.lastName);
        })

        it('should throw an error when create email duplicate', async () => {
            await underTest.createUser(createUserDto)
                .catch(err => {
                    expect(err.message).toContain(`Duplicate entry '${createUserDto.email}'`)
                })
        })
    })

    afterAll(async () => {
        await moduleRef.close()
    })
})