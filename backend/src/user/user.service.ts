import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDTO } from '../dto/createuser.dto'
import { UserDTO } from 'src/dto/user.dto';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private UserRepository: Repository<User>){}

    public async createOne(createUserRequest: CreateUserDTO){
        const user: User = new User();
        user.user_id = createUserRequest.user_id;
        user.password = createUserRequest.password;
        user.user_name = createUserRequest.user_name;
        user.is_online  = createUserRequest.is_online;

        await this.UserRepository.save(user);

        const userDTO = new UserDTO();
        userDTO.user_id = user.user_id;
        userDTO.password = user.password;
        userDTO.user_name = user.user_name;
        userDTO.is_online = user.is_online;

        return userDTO;
    }
}
