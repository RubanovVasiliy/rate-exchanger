import { ObjectId } from 'mongoose';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/user.schema';
import mongoose from 'mongoose';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() dto: CreateUserDto): Promise<User> {
    return this.userService.createUser(dto);
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':username')
  findOneByName(@Param('username') name: string) {
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
}
