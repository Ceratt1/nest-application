import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "../dto/create-user.dto";
import { UserEntity } from "../entities/user.entity";


@Injectable()
export abstract class UserRepository {
    abstract create(user: CreateUserDto): Promise<UserEntity>;
    abstract findAll(): Promise<UserEntity[]>
    abstract findOne(id: number): Promise<UserEntity>
    abstract remove(id: number): Promise<UserEntity>
    abstract getByEmail(email: string): Promise<UserEntity>
}