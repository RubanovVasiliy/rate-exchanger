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

  async createUser(dto: CreateUserDto): Promise<ObjectId> {
    const user = await this.userModel.findOne({ name: dto.name });
    if (user) {
      throw new BadRequestException('User is already registered');
    }
    const salt = bcrypt.genSaltSync(10);
    const passwordHash = bcrypt.hashSync(dto.password, salt);
    const newUser = await this.userModel.create({
      name: dto.name,
      password: passwordHash,
    });
    return newUser._id;
  }

  async findAll(): Promise<User[]> {
    const users = await this.userModel.find();
    return users;
  }

  async findOneByName(name: string): Promise<User> {
    const user = await this.userModel.findOne({ name: name });
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
