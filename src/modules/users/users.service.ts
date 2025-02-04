import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserMapper } from './mappers/user.mapper';
import { UserRepository } from './repositories/user.interface';
import { UserEntity } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  
  private readonly saltRounds : number = 10;
  constructor(private readonly userRepository: UserRepository) {}

  async create(createUserDto: CreateUserDto): Promise<CreateUserDto> {
    const UserExists = await this.userRepository.getByEmail(createUserDto.email);
    if (UserExists) throw new HttpException('This email is already in use', HttpStatus.BAD_REQUEST);
    createUserDto.password = await bcrypt.hash(createUserDto.password, this.saltRounds);
    const user = UserMapper.toEntity(createUserDto);
    return await this.userRepository.create(user);
  }

  async findAll(): Promise<UserEntity[]> {
    return await this.userRepository.findAll();
  }

  async findOne(id: number) {

    const user = await this.userRepository.findOne(id);
    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);

    return user;
  }

  async remove(id: number) {
    const user = await this.userRepository.findOne(id);
    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    
    return await this.userRepository.remove(id);
  }



}
