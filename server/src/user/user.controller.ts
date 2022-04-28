import { ObjectId } from 'mongoose';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/user.schema';
import mongoose from 'mongoose';
import { Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() dto: CreateUserDto): Promise<ObjectId> {
    return this.userService.createUser(dto);
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':name')
  findOneByName(@Param('name') name: string) {
    return this.userService.findOneByName(name);
  }

  @Patch(':id')
  update(
    @Param('id') id: ObjectId,
    @Body() updateRateDto: UpdateUserDto,
  ): Promise<boolean> {
    return this.userService.update(id, updateRateDto);
  }

  @Delete(':id')
  delete(@Param('id') id: ObjectId): Promise<mongoose.Schema.Types.ObjectId> {
    return this.userService.delete(id);
  }

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req) {
    return req.user;
  }
}
