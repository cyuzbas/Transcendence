import { CreateUserDTO } from 'src/dto/createuser.dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createOne(createUserRequest: CreateUserDTO): Promise<import("../dto/user.dto").UserDTO>;
}
