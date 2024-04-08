// user.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schema/user.schema';
import { CreateUserDto } from './dto/create.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    const user: User = await createdUser.save();
    return user;
  }

  async getUsers(): Promise<User[]> {
    return this.userModel.find().populate('products').exec();
  }

  async getUserById(userId: string): Promise<User> {
    return (
      this.userModel
        .findById(userId)
        // .populate('chats')
        .populate({
          path: 'products',
          model: 'Product',
        })
        .exec()
    );
  }

  async update(id: string, createdUserDto: CreateUserDto): Promise<User> {
    const update: User = await this.userModel
      .findByIdAndUpdate(id, createdUserDto)
      .exec();

    return update;
  }
}
