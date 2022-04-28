import { Model, ObjectId } from 'mongoose';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schemas/user.schema';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async createUser(dto: CreateUserDto): Promise<User> {
    const user = await this.userModel.findOne({ username: dto.username });
    if (user) {
      throw new BadRequestException('User is already registered');
    }
    const salt = bcrypt.genSaltSync(10);
    const passwordHash = bcrypt.hashSync(dto.password, salt);
    const newUser = await this.userModel.create({
      username: dto.username,
      password: passwordHash,
    });
    return newUser;
  }

  async findAll(): Promise<User[]> {
    const users = await this.userModel.find();
    return users;
  }

  async findOneByName(username: string): Promise<User> {
    const user = await this.userModel.findOne({ username: username });
    return user;
  }

  async update(id: ObjectId, dto: UpdateUserDto): Promise<boolean> {
    const rate = await this.userModel.findByIdAndUpdate(id, { ...dto });
    return rate._id;
  }

  async delete(id: ObjectId): Promise<ObjectId> {
    const rate = await this.userModel.findByIdAndDelete(id);
    return rate._id;
  }
}
