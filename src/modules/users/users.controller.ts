import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiBadGatewayResponse, ApiBadRequestResponse, ApiCreatedResponse,  ApiOkResponse,  ApiOperation } from '@nestjs/swagger';
import { ValidationError } from 'class-validator';
import { UserEntity } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new user' })
  @ApiCreatedResponse({  description: 'The user has been successfully created.',
    type: CreateUserDto,
    isArray: false
   })
  @ApiBadRequestResponse({ 
    description: 'Bad request.',
    type: ValidationError
   })
  create(@Body() createUserDto: CreateUserDto) : Promise<CreateUserDto> {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiOkResponse({ description: 'Success', type: UserEntity, isArray: true })
  @ApiBadGatewayResponse({ description: 'Bad Gateway' })
  findAll(): Promise<UserEntity[]> {
    return this.usersService.findAll();
  }
  
  @Get(':id')
  @ApiOkResponse({ description: 'Success', type: UserEntity, isArray: false })
  @ApiBadGatewayResponse({ description: 'Bad Gateway' })
  findOne(@Param('id') id: number) {
    return this.usersService.findOne(id);
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'Success', type: UserEntity, isArray: false })
  @ApiBadGatewayResponse({ description: 'Bad Gateway' })
  remove(@Param('id') id: number) {
    return this.usersService.remove(id);
  }


}