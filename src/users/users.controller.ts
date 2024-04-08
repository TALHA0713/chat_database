// user.controller.ts
import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './users.service';
import { User } from './schema/user.schema';
import { CreateUserDto } from './dto/create.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') userId: string): Promise<User> {
    return this.userService.getUserById(userId);
  }

  @Post('addUser')
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    const createdUser = await this.userService.create(createUserDto);
    console.log(createdUser);
    return createdUser;
  }

  @Patch(':id')
  async updateUser(
    @Param('id') id: string,
    @Body()
    createdUserDto: CreateUserDto,
  ): Promise<User> {
    return this.userService.update(id, createdUserDto);
  }
}
