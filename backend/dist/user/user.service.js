"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./user.entity");
const user_dto_1 = require("../dto/user.dto");
let UserService = class UserService {
    constructor(UserRepository) {
        this.UserRepository = UserRepository;
    }
    async createOne(createUserRequest) {
        const existingUser = await this.UserRepository.findOne({ where: { user_name: createUserRequest.user_name } });
        if (existingUser) {
            throw new Error('User already exists!');
        }
        const user = new user_entity_1.User();
        user.user_id = createUserRequest.user_id;
        user.password = createUserRequest.password;
        user.user_name = createUserRequest.user_name;
        user.is_online = createUserRequest.is_online;
        await this.UserRepository.save(user);
        const userDTO = new user_dto_1.UserDTO();
        userDTO.user_id = user.user_id;
        userDTO.password = user.password;
        userDTO.user_name = user.user_name;
        userDTO.is_online = user.is_online;
        return userDTO;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map