import { Controller , Post, Body } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDTO } from 'src/dto/createuser.dto';
import { UserService } from './user.service';


@Controller('users')
export class UserController {
	constructor(private readonly userService : UserService) {}
    
    @Post()
    public async createOne(@Body() createUserRequest: CreateUserDTO){
        const resp = await this.userService.createOne(createUserRequest)
        return resp;
    }
}
