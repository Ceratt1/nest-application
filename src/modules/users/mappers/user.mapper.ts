import { CreateUserDto } from "../dto/create-user.dto";
import { UpdateUserDto } from "../dto/update-user.dto";
import { UserEntity } from "../entities/user.entity";

export class UserMapper {
    static toEntity(dto: CreateUserDto | UpdateUserDto): UserEntity {
        return {
            id: 0, // O ID deve ser gerado pelo banco de dados
            email: dto.email,
            password: dto.password
        };
    }
}
