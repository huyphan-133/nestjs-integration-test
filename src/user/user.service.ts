import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) { }

    createUser(dto: CreateUserDto) {
        return this.userRepository.save(dto)
    }
}
