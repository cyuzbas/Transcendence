import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDTO } from '../dto/createuser.dto';
import { UserDTO } from 'src/dto/user.dto';
export declare class UserService {
    private UserRepository;
    constructor(UserRepository: Repository<User>);
    createOne(createUserRequest: CreateUserDTO): Promise<UserDTO>;
}
