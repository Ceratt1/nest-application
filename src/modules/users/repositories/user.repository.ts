import { PrismaService } from "src/infra/prisma/prisma.service";
import { CreateUserDto } from "../dto/create-user.dto";
import { UserRepository } from "./user.interface";
import { UserEntity } from "../entities/user.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserPrismaRepository implements UserRepository {

    constructor(private readonly prisma : PrismaService) {}
    findAll(): Promise<UserEntity[]> {
        return this.prisma.user.findMany()
    }
    findOne(id: number): Promise<UserEntity> {
        return this.prisma.user.findUnique({
            where: {
                id: id
            }
        })
    }

    remove(id: number): Promise<UserEntity> {
        return this.prisma.user.delete({
            where: {
                id: id
            }
        })
    }
    async getByEmail(email: string): Promise<UserEntity> {
        return await this.prisma.user.findUnique({
            where: {
                email: email
            }
        })
    }

    async create(user: CreateUserDto): Promise<UserEntity> {
        return await this.prisma.user.create({
            data: {
                email: user.email,
                password: user.password
            }
        })
    }   
}